/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

const del = require('del');
const fs = require('fs');
const handlebars = require('handlebars');
const mkdirp = require('mkdirp');
const path = require('path');
const uppercamelcase = require('uppercamelcase');

let icons = [];

const ICON_REGEXP = new RegExp(/([a-z]*)(_)(.*?)(_)(.*?)(_)([a-z]*)/, 'i');

// Folders to add
const CATEGORIES = [
    'action',
    'banking',
    'brand',
    'category',
    'currency',
    'entity',
    'file',
    'ui',
    'user'
];

// Bank name —> bank ID
// We rename banks for convenient usage in apps
const BANKS_MAPPING = {
    'bank-alfa': 'bank-2449',
    'bank-baltiyskiy': 'bank-3308',
    'bank-europe': 'bank-10223',
    'bank-home-credit': 'bank-439',
    'bank-mdm': 'bank-9908',
    'bank-mkb': 'bank-3001',
    'bank-moscow': 'bank-5475',
    'bank-mts': 'bank-1490',
    'bank-otkritie': 'bank-4267',
    'bank-otp': 'bank-7311',
    'bank-psb': 'bank-1516',
    'bank-qiwi': 'bank-1309',
    'bank-raiffeisen': 'bank-8967',
    'bank-russian-standard': 'bank-6415',
    'bank-saint-petersburg': 'bank-285',
    'bank-sber': 'bank-4924',
    'bank-skb': 'bank-5030',
    'bank-societe-generale': 'bank-351',
    'bank-tinkoff': 'bank-256',
    'bank-trust': 'bank-1415',
    'bank-unicredit': 'bank-7687',
    'bank-uralsib': 'bank-7686',
    'bank-uralskiy': 'bank-2377',
    'bank-vozrozhdenie': 'bank-244',
    'bank-vtb': 'bank-404'
};

const SIZE_ORDER = ['s', 'm', 'l', 'xl', 'xxl'];

const COPYRIGHT =
`/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n`;

// Check if source is directory
const isDirectory = source => fs.lstatSync(source).isDirectory();

// Return all directories from source
const getDirectories = source =>
    fs.readdirSync(source)
        .map(name => path.join(source, name))
        .filter(isDirectory);

// Delete folders
const clean = new Promise((resolve) => {
    getDirectories('./src/icon').map(file => del.sync(file));
    resolve();
});

// Get Handlebars template
const getTemplate = (filename, data) => {
    let template = handlebars.compile(
        fs.readFileSync(`./src/icon/${filename}.hbs`, 'utf8')
    );
    return template(data);
};

// Return filename. Also renames banks
const getFilename = (iconPath) => {
    let filename = path.basename(iconPath, 'icon');
    let name = filename.match(ICON_REGEXP)[3];
    if (name in BANKS_MAPPING) {
        filename = filename.replace(name, BANKS_MAPPING[name]);
    }
    return filename;
};

class Icon {
    constructor(iconPath) {
        this.fileName = getFilename(iconPath);
        this.path = iconPath;
        this.categoryPath = `./src/icon/${this
            .getCategory()}/${this.getName()}/`;
        this.indexFile = `${this.categoryPath}index.js`;
        this.cssFile = `${this.categoryPath}${this.getName()}.css`;
        this.jsxFile = `${this.categoryPath}${this.getName()}.jsx`;
        this.name = this.getName();
        this.category = this.getCategory();
        this.componentName = `Icon${uppercamelcase(this.getName())}`;
        this.size = this.getSize();
        this.color = this.getColor();
        this.colored = this.getColor() === 'color';
        this.aruiColor = this.getAruiColor();
        this.classes = this.getClasses();
    }

    getClasses() {
        let classes = `.icon_size_${this.getSize()}.icon_name_${this.getName()}`;
        if (!this.getAruiColor()) {
            classes += '.icon_colored.icon_theme_alfa-on-color';
            classes += `, .icon_size_${this.getSize()}.icon_name_${this.getName()}`;
            classes += '.icon_colored.icon_theme_alfa-on-white';
        } else {
            classes += `.icon_theme_${this.getAruiColor()}`;
        }
        return classes;
    }

    // Category
    getCategory() {
        return path.basename(path.dirname(this.path));
    }

    // Name
    getName() {
        return this.fileName.match(ICON_REGEXP)[3];
    }

    // Size
    getSize() {
        return this.fileName.match(ICON_REGEXP)[5];
    }

    // Color
    getColor() {
        return this.fileName.match(ICON_REGEXP)[7];
    }

    // Color in arui fashion
    getAruiColor() {
        let color = this.getColor();
        if (color === 'white') return 'alfa-on-color';
        if (color === 'black') return 'alfa-on-white';
        return false;
    }

    // Create folder structure
    createFolder() {
        return new Promise((resolve) => {
            mkdirp.sync(this.categoryPath);
            resolve();
        });
    }

    // Copy svg files
    copySVG() {
        fs.copyFile(
            this.path, `${this.categoryPath}${this.fileName}`,
            (err) => { if (err) throw err; }
        );
    }

    // Create index.js
    createIndex() {
        fs.writeFile(
            this.indexFile, getTemplate('index.js', this),
            (err) => { if (err) throw err; }
        );
    }

    // Create jsx files
    createJSX() {
        fs.writeFile(
            this.jsxFile, getTemplate('icon.jsx', this),
            (err) => { if (err) throw err; }
        );
    }

    // Create css file if needed and add background image rule
    addCSS() {
        if (!fs.exists(this.cssFile)) {
            fs.writeFile(
                this.cssFile, COPYRIGHT,
                (err) => { if (err) throw err; }
            );
        }
        fs.appendFile(
            this.cssFile, getTemplate('icon.css', this), 'utf8',
            (err) => { if (err) throw err; }
        );
    }
}

// Pseudo glob. Creates array of Icon classes
const getIcons = (source, extension) => {
    let results = [];
    if (!fs.existsSync(source)) return false;
    const files = fs.readdirSync(source);
    files.forEach((file) => {
        const filename = path.join(source, file);
        const icon = new Icon(filename);
        if (isDirectory(filename)) {
            results = results.concat(getIcons(filename, extension));
        } else if (filename.indexOf(extension) >= 0) {
            results.push(icon);
        }
    });
    return results;
};

// Readme generator
const createReadme = (icons) => {
    let categoriesArray = [];

    CATEGORIES.forEach((category) => {
        categoriesArray.push(icons

            // Get icons from this category
            .filter(item => item.category === category)

            // Get only needed properties
            .map((item) => {
                return {
                    name: item.name,
                    size: item.size,
                    colored: item.colored,
                    category: item.category,
                    componentName: item.componentName
                };
            })

            // Remove dublicates, put sizes into array
            .reduce((result, item) => {
                const total = result;

                // Check if icon with such name exists &
                // returns its index in array
                const getIndex = () => total
                    .map(i => i.name)
                    .indexOf(item.name);

                const sizeItem = {
                    size: item.size,
                    colored: item.colored
                };

                // If icon with such name doesnt exist, add it
                if (getIndex() < 0) {
                    total.push(
                        {
                            name: item.name,
                            size: [sizeItem],
                            category: item.category,
                            componentName: item.componentName
                        }
                    );
                    return total;
                }

                const sizesArray = total[getIndex()].size;

                // Check if this size already exists
                const sizeIndex = sizesArray
                    .map(i => i.size)
                    .indexOf(item.size);

                // Add icon, if size doesnt exists or its colored
                if (sizeIndex < 0 || item.colored) {
                    sizesArray.push(sizeItem);

                    // Sort icons by size
                    sizesArray.sort((a, b) => {
                        return SIZE_ORDER.indexOf(a.size) >
                               SIZE_ORDER.indexOf(b.size) ? 1 : -1;
                    });
                }

                return total;
            }, [])
        );
    });

    fs.writeFile(
        './src/icon/README.md', getTemplate('README.md', categoriesArray),
        (err) => { if (err) throw err; }
    );
};

// Get icons
CATEGORIES.forEach((folder) => {
    icons.push(...getIcons(
        `./node_modules/alfa-ui-primitives/icons/${folder}`,
        '.svg'
    ));
});

// Main process. Clean icons, create documentaion, folder structure,
// copy svgs, create index.js, .jsx and css files for component.
clean.then(() => {
    console.info('⏳ Creating icons');
    createReadme(icons);
    icons.forEach((icon) => {
        icon.createFolder()
            .then(() => {
                icon.copySVG();
                icon.createIndex();
                icon.createJSX();
                icon.addCSS();
            }).catch((err) => { if (err) throw err; });
    });
}).then(() => {
    console.info(`👌 ${icons.length} icons created`);
}).catch((err) => { if (err) throw err; });
