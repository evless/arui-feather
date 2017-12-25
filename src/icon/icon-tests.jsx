/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { render, cleanUp } from '../test-utils';
import Icon from './icon';

import IconAdd from './action/add';
import IconAttachment from './action/attachment';
import IconBack from './action/back';
import IconCall from './action/call';
import IconCardPinChange from './action/card-pin-change';
import IconCardlock from './action/cardlock';
import IconCardunlock from './action/cardunlock';
import IconChat from './action/chat';
import IconConvert from './action/convert';
import IconDelete from './action/delete';
import IconDislike from './action/dislike';
import IconDislikeFilled from './action/dislike-filled';
import IconEdit from './action/edit';
import IconEmail from './action/email';
import IconFilter from './action/filter';
import IconLike from './action/like';
import IconLikeFilled from './action/like-filled';
import IconLock from './action/lock';
import IconLogout from './action/logout';
import IconPasswordChange from './action/password-change';
import IconPasswordHide from './action/password-hide';
import IconPasswordShow from './action/password-show';
import IconPause from './action/pause';
import IconPin from './action/pin';
import IconPinUnpin from './action/pin-unpin';
import IconPower from './action/power';
import IconPowerCard from './action/power-card';
import IconPrinter from './action/printer';
import IconRepeat from './action/repeat';
import IconReply from './action/reply';
import IconSearch from './action/search';
import IconShareAndroid from './action/share-android';
import IconShareIos from './action/share-ios';
import IconSign from './action/sign';
import IconUnlock from './action/unlock';
import IconUserLogout from './action/user-logout';
import IconAccountAdd from './banking/account-add';
import IconAccountDefault from './banking/account-default';
import IconAccountShared from './banking/account-shared';
import IconCard from './banking/card';
import IconCardAccountsList from './banking/card-accounts-list';
import IconCardActivation from './banking/card-activation';
import IconCardExpences from './banking/card-expences';
import IconCardList from './banking/card-list';
import IconCash from './banking/cash';
import IconCosts from './banking/costs';
import IconCostsCard from './banking/costs-card';
import IconCredit from './banking/credit';
import IconCvv from './banking/cvv';
import IconDeposit from './banking/deposit';
import IconExpences from './banking/expences';
import IconExpencesPlanner from './banking/expences-planner';
import IconGoals from './banking/goals';
import IconIncome from './banking/income';
import IconInvestments from './banking/investments';
import IconInvoiceForPayment from './banking/invoice-for-payment';
import IconLimits from './banking/limits';
import IconOutcome from './banking/outcome';
import IconPaymentByPhoto from './banking/payment-by-photo';
import IconPaymentError from './banking/payment-error';
import IconPaymentOutbox from './banking/payment-outbox';
import IconPaymentPlus from './banking/payment-plus';
import IconPaymentRoundedPlus from './banking/payment-rounded-plus';
import IconPaymentToCompany from './banking/payment-to-company';
import IconPaymentToPerson from './banking/payment-to-person';
import IconPaymentToSelf from './banking/payment-to-self';
import IconPaymentToState from './banking/payment-to-state';
import IconPlanExpenses from './banking/plan-expenses';
import IconPlansByCategory from './banking/plans-by-category';
import IconReadyToSend from './banking/ready-to-send';
import IconRequestMoney from './banking/request-money';
import IconSent from './banking/sent';
import IconSubscrption from './banking/subscrption';
import IconTransferAnyBank from './banking/transfer-any-bank';
import IconTransferAnyBankCredit from './banking/transfer-any-bank-credit';
import IconTransferBetweenAccounts from './banking/transfer-between-accounts';
import IconTransferCard from './banking/transfer-card';
import IconTransferExternal from './banking/transfer-external';
import IconTransferIn from './banking/transfer-in';
import IconTransferInternal from './banking/transfer-internal';
import IconTransferOut from './banking/transfer-out';
import IconTransferSelf from './banking/transfer-self';
import IconTransferToCard from './banking/transfer-to-card';
import IconBank2449 from './brand/bank-2449';
import IconBank3308 from './brand/bank-3308';
import IconBank10223 from './brand/bank-10223';
import IconBank439 from './brand/bank-439';
import IconBank9908 from './brand/bank-9908';
import IconBank3001 from './brand/bank-3001';
import IconBank5475 from './brand/bank-5475';
import IconBank1490 from './brand/bank-1490';
import IconBank4267 from './brand/bank-4267';
import IconBank7311 from './brand/bank-7311';
import IconBank1516 from './brand/bank-1516';
import IconBank1309 from './brand/bank-1309';
import IconBank8967 from './brand/bank-8967';
import IconBank6415 from './brand/bank-6415';
import IconBank285 from './brand/bank-285';
import IconBank4924 from './brand/bank-4924';
import IconBank5030 from './brand/bank-5030';
import IconBank351 from './brand/bank-351';
import IconBank256 from './brand/bank-256';
import IconBank1415 from './brand/bank-1415';
import IconBank7687 from './brand/bank-7687';
import IconBank7686 from './brand/bank-7686';
import IconBank2377 from './brand/bank-2377';
import IconBank244 from './brand/bank-244';
import IconBank404 from './brand/bank-404';
import IconCardBelkart from './brand/card-belkart';
import IconCardMaestro from './brand/card-maestro';
import IconCardMastercard from './brand/card-mastercard';
import IconCardMir from './brand/card-mir';
import IconCardVisa from './brand/card-visa';
import IconCardVisaElectron from './brand/card-visa-electron';
import IconLogoAlfabank from './brand/logo-alfabank';
import IconMaestro from './brand/maestro';
import IconMastercard from './brand/mastercard';
import IconMir from './brand/mir';
import IconNetworkFacebook from './brand/network-facebook';
import IconNetworkTwitter from './brand/network-twitter';
import IconNetworkVk from './brand/network-vk';
import IconVisa from './brand/visa';
import IconCategoryAppliances from './category/category-appliances';
import IconCategoryAtm from './category/category-atm';
import IconCategoryAuto from './category/category-auto';
import IconCategoryAward from './category/category-award';
import IconCategoryBooksMovies from './category/category-books-movies';
import IconCategoryBudget from './category/category-budget';
import IconCategoryBusiness from './category/category-business';
import IconCategoryBusinessActivity from './category/category-business-activity';
import IconCategoryBusinessTrip from './category/category-business-trip';
import IconCategoryCar from './category/category-car';
import IconCategoryCash from './category/category-cash';
import IconCategoryCashback from './category/category-cashback';
import IconCategoryCharity from './category/category-charity';
import IconCategoryClothing from './category/category-clothing';
import IconCategoryDefault from './category/category-default';
import IconCategoryDepts from './category/category-depts';
import IconCategoryDress from './category/category-dress';
import IconCategoryDunno from './category/category-dunno';
import IconCategoryEducation from './category/category-education';
import IconCategoryEntertainment from './category/category-entertainment';
import IconCategoryFamily from './category/category-family';
import IconCategoryFarmacy from './category/category-farmacy';
import IconCategoryFinance from './category/category-finance';
import IconCategoryFines from './category/category-fines';
import IconCategoryForgot from './category/category-forgot';
import IconCategoryGas from './category/category-gas';
import IconCategoryGasoline from './category/category-gasoline';
import IconCategoryGibddFines from './category/category-gibdd-fines';
import IconCategoryGrocery from './category/category-grocery';
import IconCategoryHealth from './category/category-health';
import IconCategoryHobby from './category/category-hobby';
import IconCategoryHoliday from './category/category-holiday';
import IconCategoryHouse from './category/category-house';
import IconCategoryHousekeeping from './category/category-housekeeping';
import IconCategoryInvestments from './category/category-investments';
import IconCategoryLoans from './category/category-loans';
import IconCategoryMedia from './category/category-media';
import IconCategoryMedicine from './category/category-medicine';
import IconCategoryMobileInternet from './category/category-mobile-internet';
import IconCategoryMortgage from './category/category-mortgage';
import IconCategoryOther from './category/category-other';
import IconCategoryPerson from './category/category-person';
import IconCategoryPets from './category/category-pets';
import IconCategoryRegistry from './category/category-registry';
import IconCategoryRent from './category/category-rent';
import IconCategoryRepairs from './category/category-repairs';
import IconCategoryRestaurants from './category/category-restaurants';
import IconCategorySalary from './category/category-salary';
import IconCategoryScholarship from './category/category-scholarship';
import IconCategoryShopping from './category/category-shopping';
import IconCategoryState from './category/category-state';
import IconCategoryTaxFines from './category/category-tax-fines';
import IconCategoryTelecom from './category/category-telecom';
import IconCategoryTourism from './category/category-tourism';
import IconCategoryTrafficFine from './category/category-traffic-fine';
import IconCategoryTransfer from './category/category-transfer';
import IconCategoryTransit from './category/category-transit';
import IconCategoryTransport from './category/category-transport';
import IconCategoryTravel from './category/category-travel';
import IconCategoryTroika from './category/category-troika';
import IconCategoryUser from './category/category-user';
import IconCategoryVacation from './category/category-vacation';
import IconUtilities from './category/utilities';
import IconCurrency from './currency/currency';
import IconCurrencyChf from './currency/currency-chf';
import IconCurrencyEur from './currency/currency-eur';
import IconCurrencyGbp from './currency/currency-gbp';
import IconCurrencyJpy from './currency/currency-jpy';
import IconCurrencyRub from './currency/currency-rub';
import IconCurrencyUsd from './currency/currency-usd';
import IconAddressBook from './entity/address-book';
import IconAlfaCheck from './entity/alfa-check';
import IconAlfacheck from './entity/alfacheck';
import IconAlfadialogue from './entity/alfadialogue';
import IconAlfamobile from './entity/alfamobile';
import IconAtm from './entity/atm';
import IconBag from './entity/bag';
import IconCalendar from './entity/calendar';
import IconClock from './entity/clock';
import IconContactList from './entity/contact-list';
import IconContactless from './entity/contactless';
import IconContactlessOff from './entity/contactless-off';
import IconContactlessOn from './entity/contactless-on';
import IconDirections from './entity/directions';
import IconDiscount from './entity/discount';
import IconDraft from './entity/draft';
import IconEmoney from './entity/emoney';
import IconHistory from './entity/history';
import IconInbox from './entity/inbox';
import IconInternet from './entity/internet';
import IconMobile from './entity/mobile';
import IconMoneybox from './entity/moneybox';
import IconNews from './entity/news';
import IconNotifications from './entity/notifications';
import IconOffice from './entity/office';
import IconPerson from './entity/person';
import IconPhoto from './entity/photo';
import IconPresent from './entity/present';
import IconQr from './entity/qr';
import IconRegistry from './entity/registry';
import IconSecurity from './entity/security';
import IconSettings from './entity/settings';
import IconSite from './entity/site';
import IconAccount from './file/account';
import IconAccountEuro from './file/account-euro';
import IconAccountInfo from './file/account-info';
import IconAccountMain from './file/account-main';
import IconAccountRub from './file/account-rub';
import IconAccountText from './file/account-text';
import IconAccountUsd from './file/account-usd';
import IconFormat1c from './file/format-1c';
import IconFormatAttach from './file/format-attach';
import IconFormatCsv from './file/format-csv';
import IconFormatDefault from './file/format-default';
import IconFormatDoc from './file/format-doc';
import IconFormatPdf from './file/format-pdf';
import IconFormatPng from './file/format-png';
import IconFormatPpt from './file/format-ppt';
import IconFormatSketch from './file/format-sketch';
import IconFormatSvg from './file/format-svg';
import IconFormatTxt from './file/format-txt';
import IconFormatXls from './file/format-xls';
import IconFormatXml from './file/format-xml';
import IconFormatZip from './file/format-zip';
import IconArrowDown from './ui/arrow-down';
import IconBackspace from './ui/backspace';
import IconBuy from './ui/buy';
import IconCheck from './ui/check';
import IconClose from './ui/close';
import IconDone from './ui/done';
import IconDown from './ui/down';
import IconError from './ui/error';
import IconExpandDown from './ui/expand-down';
import IconFail from './ui/fail';
import IconFavorite from './ui/favorite';
import IconFavoriteActive from './ui/favorite-active';
import IconFavourites from './ui/favourites';
import IconFeature from './ui/feature';
import IconFeedback from './ui/feedback';
import IconFeedbackStar from './ui/feedback-star';
import IconFeedbackStarSelected from './ui/feedback-star-selected';
import IconGeolocation from './ui/geolocation';
import IconHelp from './ui/help';
import IconHelpfilled from './ui/helpfilled';
import IconInfo from './ui/info';
import IconLeft from './ui/left';
import IconLocation from './ui/location';
import IconMenuModeCheck from './ui/menu-mode-check';
import IconOk from './ui/ok';
import IconOkFilled from './ui/ok-filled';
import IconPlay from './ui/play';
import IconRight from './ui/right';
import IconSelectTick from './ui/select-tick';
import IconSell from './ui/sell';
import IconStatusCatalog from './ui/status-catalog';
import IconSubmit from './ui/submit';
import IconSystemBack from './ui/system-back';
import IconSystemClose from './ui/system-close';
import IconSystemHelp from './ui/system-help';
import IconUp from './ui/up';
import IconVerifying from './ui/verifying';
import IconManager from './user/manager';
import IconUser from './user/user';
import IconUserBody from './user/user-body';

describe('icon', () => {
    afterEach(cleanUp);

    it('renders without problems', () => {
        let icon = render(<Icon />);
        expect(icon.node).to.have.exist;
    });

    (() => {
        let icons = [
            IconAdd,
            IconAttachment,
            IconBack,
            IconCall,
            IconCardPinChange,
            IconCardlock,
            IconCardunlock,
            IconChat,
            IconConvert,
            IconDelete,
            IconDislike,
            IconDislikeFilled,
            IconEdit,
            IconEmail,
            IconFilter,
            IconLike,
            IconLikeFilled,
            IconLock,
            IconLogout,
            IconPasswordChange,
            IconPasswordHide,
            IconPasswordShow,
            IconPause,
            IconPin,
            IconPinUnpin,
            IconPower,
            IconPowerCard,
            IconPrinter,
            IconRepeat,
            IconReply,
            IconSearch,
            IconShareAndroid,
            IconShareIos,
            IconSign,
            IconUnlock,
            IconUserLogout,
            IconAccountAdd,
            IconAccountDefault,
            IconAccountShared,
            IconCard,
            IconCardAccountsList,
            IconCardActivation,
            IconCardExpences,
            IconCardList,
            IconCash,
            IconCosts,
            IconCostsCard,
            IconCredit,
            IconCvv,
            IconDeposit,
            IconExpences,
            IconExpencesPlanner,
            IconGoals,
            IconIncome,
            IconInvestments,
            IconInvoiceForPayment,
            IconLimits,
            IconOutcome,
            IconPaymentByPhoto,
            IconPaymentError,
            IconPaymentOutbox,
            IconPaymentPlus,
            IconPaymentRoundedPlus,
            IconPaymentToCompany,
            IconPaymentToPerson,
            IconPaymentToSelf,
            IconPaymentToState,
            IconPlanExpenses,
            IconPlansByCategory,
            IconReadyToSend,
            IconRequestMoney,
            IconSent,
            IconSubscrption,
            IconTransferAnyBank,
            IconTransferAnyBankCredit,
            IconTransferBetweenAccounts,
            IconTransferCard,
            IconTransferExternal,
            IconTransferIn,
            IconTransferInternal,
            IconTransferOut,
            IconTransferSelf,
            IconTransferToCard,
            IconBank2449,
            IconBank3308,
            IconBank10223,
            IconBank439,
            IconBank9908,
            IconBank3001,
            IconBank5475,
            IconBank1490,
            IconBank4267,
            IconBank7311,
            IconBank1516,
            IconBank1309,
            IconBank8967,
            IconBank6415,
            IconBank285,
            IconBank4924,
            IconBank5030,
            IconBank351,
            IconBank256,
            IconBank1415,
            IconBank7687,
            IconBank7686,
            IconBank2377,
            IconBank244,
            IconBank404,
            IconCardBelkart,
            IconCardMaestro,
            IconCardMastercard,
            IconCardMir,
            IconCardVisa,
            IconCardVisaElectron,
            IconLogoAlfabank,
            IconMaestro,
            IconMastercard,
            IconMir,
            IconNetworkFacebook,
            IconNetworkTwitter,
            IconNetworkVk,
            IconVisa,
            IconCategoryAppliances,
            IconCategoryAtm,
            IconCategoryAuto,
            IconCategoryAward,
            IconCategoryBooksMovies,
            IconCategoryBudget,
            IconCategoryBusiness,
            IconCategoryBusinessActivity,
            IconCategoryBusinessTrip,
            IconCategoryCar,
            IconCategoryCash,
            IconCategoryCashback,
            IconCategoryCharity,
            IconCategoryClothing,
            IconCategoryDefault,
            IconCategoryDepts,
            IconCategoryDress,
            IconCategoryDunno,
            IconCategoryEducation,
            IconCategoryEntertainment,
            IconCategoryFamily,
            IconCategoryFarmacy,
            IconCategoryFinance,
            IconCategoryFines,
            IconCategoryForgot,
            IconCategoryGas,
            IconCategoryGasoline,
            IconCategoryGibddFines,
            IconCategoryGrocery,
            IconCategoryHealth,
            IconCategoryHobby,
            IconCategoryHoliday,
            IconCategoryHouse,
            IconCategoryHousekeeping,
            IconCategoryInvestments,
            IconCategoryLoans,
            IconCategoryMedia,
            IconCategoryMedicine,
            IconCategoryMobileInternet,
            IconCategoryMortgage,
            IconCategoryOther,
            IconCategoryPerson,
            IconCategoryPets,
            IconCategoryRegistry,
            IconCategoryRent,
            IconCategoryRepairs,
            IconCategoryRestaurants,
            IconCategorySalary,
            IconCategoryScholarship,
            IconCategoryShopping,
            IconCategoryState,
            IconCategoryTaxFines,
            IconCategoryTelecom,
            IconCategoryTourism,
            IconCategoryTrafficFine,
            IconCategoryTransfer,
            IconCategoryTransit,
            IconCategoryTransport,
            IconCategoryTravel,
            IconCategoryTroika,
            IconCategoryUser,
            IconCategoryVacation,
            IconUtilities,
            IconCurrency,
            IconCurrencyChf,
            IconCurrencyEur,
            IconCurrencyGbp,
            IconCurrencyJpy,
            IconCurrencyRub,
            IconCurrencyUsd,
            IconAddressBook,
            IconAlfaCheck,
            IconAlfacheck,
            IconAlfadialogue,
            IconAlfamobile,
            IconAtm,
            IconBag,
            IconCalendar,
            IconClock,
            IconContactList,
            IconContactless,
            IconContactlessOff,
            IconContactlessOn,
            IconDirections,
            IconDiscount,
            IconDraft,
            IconEmoney,
            IconHistory,
            IconInbox,
            IconInternet,
            IconMobile,
            IconMoneybox,
            IconNews,
            IconNotifications,
            IconOffice,
            IconPerson,
            IconPhoto,
            IconPresent,
            IconQr,
            IconRegistry,
            IconSecurity,
            IconSettings,
            IconSite,
            IconAccount,
            IconAccountEuro,
            IconAccountInfo,
            IconAccountMain,
            IconAccountRub,
            IconAccountText,
            IconAccountUsd,
            IconFormat1c,
            IconFormatAttach,
            IconFormatCsv,
            IconFormatDefault,
            IconFormatDoc,
            IconFormatPdf,
            IconFormatPng,
            IconFormatPpt,
            IconFormatSketch,
            IconFormatSvg,
            IconFormatTxt,
            IconFormatXls,
            IconFormatXml,
            IconFormatZip,
            IconArrowDown,
            IconBackspace,
            IconBuy,
            IconCheck,
            IconClose,
            IconDone,
            IconDown,
            IconError,
            IconExpandDown,
            IconFail,
            IconFavorite,
            IconFavoriteActive,
            IconFavourites,
            IconFeature,
            IconFeedback,
            IconFeedbackStar,
            IconFeedbackStarSelected,
            IconGeolocation,
            IconHelp,
            IconHelpfilled,
            IconInfo,
            IconLeft,
            IconLocation,
            IconMenuModeCheck,
            IconOk,
            IconOkFilled,
            IconPlay,
            IconRight,
            IconSelectTick,
            IconSell,
            IconStatusCatalog,
            IconSubmit,
            IconSystemBack,
            IconSystemClose,
            IconSystemHelp,
            IconUp,
            IconVerifying,
            IconManager,
            IconUser,
            IconUserBody
        ];

        return icons.map((icon, i) => (
            it(`render ${icon.name} without problems`, () => {
                let CurrentComponent = icons[i];
                let renderedIcon = render(<CurrentComponent />);
                expect(renderedIcon.node).to.have.class(`icon_name_${name}`);
            })
        ));
    })();
});
