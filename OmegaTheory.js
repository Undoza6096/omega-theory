import { ExponentialCost, FreeCost, LinearCost } from "./api/Costs";
import { Localization } from "./api/Localization";
import { BigNumber } from "./api/BigNumber";
import { theory } from "./api/Theory";
import { Utils } from "./api/Utils";

var id = "OmegaTheory";
var name = "Omega Theory";
var description = "A basic theory.";
var authors = "Karen";
var version = 1;

var currency;
var c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15;
var c1Exp, c2Exp, c3Exp, c4Exp, c5Exp, c6Exp, c7Exp, c8Exp;

var achievement1, achievement2;
var chapter1, chapter2;

var init = () => {
    currency = theory.createCurrency();
    currency_M = theory.createCurrency("M", "M");
    currency_F = theory.createCurrency("F", "F");

    ///////////////////
    // Regular Upgrades

    // c1
    {
        let getDesc = (level) => "c_1=" + getC1(level).toString(0);
        c1 = theory.createUpgrade(0, currency, new FirstFreeCost(new ExponentialCost(10, Math.log2(2))));
        c1.getDescription = (_) => Utils.getMath(getDesc(c1.level));
        c1.getInfo = (amount) => Utils.getMathTo(getDesc(c1.level), getDesc(c1.level + amount));
    }

    // c2
    {
        let getDesc = (level) => "c_2=2^{" + level + "}";
        let getInfo = (level) => "c_2=" + getC2(level).toString(0);
        c2 = theory.createUpgrade(1, currency, new ExponentialCost(1e3, Math.log2(10)));
        c2.getDescription = (_) => Utils.getMath(getDesc(c2.level));
        c2.getInfo = (amount) => Utils.getMathTo(getInfo(c2.level), getInfo(c2.level + amount));
    }

    // c3
    {
        let getDesc = (level) => "c_3=2^{" + level + "}";
        let getInfo = (level) => "c_3=" + getC3(level).toString(0);
        c3 = theory.createUpgrade(2, currency, new ExponentialCost(1e5, Math.log2(20)));
        c3.getDescription = (_) => Utils.getMath(getDesc(c3.level));
        c3.getInfo = (amount) => Utils.getMathTo(getInfo(c3.level), getInfo(c3.level + amount));
    }

     // c4
     {
        let getDesc = (level) => "c_4=2^{" + level + "}";
        let getInfo = (level) => "c_4=" + getC4(level).toString(0);
        c4 = theory.createUpgrade(3, currency, new ExponentialCost(1e8, Math.log2(50)));
        c4.getDescription = (_) => Utils.getMath(getDesc(c4.level));
        c4.getInfo = (amount) => Utils.getMathTo(getInfo(c4.level), getInfo(c4.level + amount));
    }
     // c5
     {
        let getDesc = (level) => "c_5=2^{" + level + "}";
        let getInfo = (level) => "c_5=" + getC5(level).toString(0);
        c5 = theory.createUpgrade(4, currency, new ExponentialCost(1e10, Math.log2(100)));
        c5.getDescription = (_) => Utils.getMath(getDesc(c5.level));
        c5.getInfo = (amount) => Utils.getMathTo(getInfo(c5.level), getInfo(c5.level + amount));
    }

    // c6
    {
        let getDesc = (level) => "c_6=2^{" + level + "}";
        let getInfo = (level) => "c_6=" + getC6(level).toString(0);
        c6 = theory.createUpgrade(5, currency, new ExponentialCost(1e13, Math.log2(200)));
        c6.getDescription = (_) => Utils.getMath(getDesc(c6.level));
        c6.getInfo = (amount) => Utils.getMathTo(getInfo(c6.level), getInfo(c6.level + amount));
    }

    // c7
    {
        let getDesc = (level) => "c_7=2^{" + level + "}";
        let getInfo = (level) => "c_7=" + getC7(level).toString(0);
        c7 = theory.createUpgrade(6, currency, new ExponentialCost(1e18, Math.log2(500)));
        c7.getDescription = (_) => Utils.getMath(getDesc(c7.level));
        c7.getInfo = (amount) => Utils.getMathTo(getInfo(c7.level), getInfo(c7.level + amount));
    }

    // c8
    {
        let getDesc = (level) => "c_8=2^{" + level + "}";
        let getInfo = (level) => "c_8=" + getC8(level).toString(0);
        c8 = theory.createUpgrade(7, currency, new ExponentialCost(1e22, Math.log2(1000)));
        c8.getDescription = (_) => Utils.getMath(getDesc(c8.level));
        c8.getInfo = (amount) => Utils.getMathTo(getInfo(c8.level), getInfo(c8.level + amount));
    }

    // c9
    {
        let getDesc = (level) => "c_9=2^{" + level + "}";
        let getInfo = (level) => "c_9=" + getC9(level).toString(0);
        c9 = theory.createUpgrade(8, currency_M, new ExponentialCost(100, Math.log2(2)));
        c9.getDescription = (_) => Utils.getMath(getDesc(c9.level));
        c9.getInfo = (amount) => Utils.getMathTo(getInfo(c9.level), getInfo(c9.level + amount));
    }

    // c10
    {
        let getDesc = (level) => "c_10=2^{" + level + "}";
        let getInfo = (level) => "c_10=" + getC10(level).toString(0);
        c10 = theory.createUpgrade(9, currency_M, new ExponentialCost(10000, Math.log2(10)));
        c10.getDescription = (_) => Utils.getMath(getDesc(c10.level));
        c10.getInfo = (amount) => Utils.getMathTo(getInfo(c10.level), getInfo(c10.level + amount));
    }

     // c11
     {
        let getDesc = (level) => "c_11=2^{" + level + "}";
        let getInfo = (level) => "c_11=" + getC11(level).toString(0);
        c11 = theory.createUpgrade(10, currency_M, new ExponentialCost(1e8, Math.log2(50)));
        c11.getDescription = (_) => Utils.getMath(getDesc(c11.level));
        c11.getInfo = (amount) => Utils.getMathTo(getInfo(c11.level), getInfo(c11.level + amount));
    }

    // c12
    {
        let getDesc = (level) => "c_12=10^{" + level + "}";
        let getInfo = (level) => "c_12=" + getC12(level).toString(0);
        c12 = theory.createUpgrade(11, currency_M, new ExponentialCost(1e40, Math.log2(1e10)));
        c12.getDescription = (_) => Utils.getMath(getDesc(c12.level));
        c12.getInfo = (amount) => Utils.getMathTo(getInfo(c12.level), getInfo(c12.level + amount));
    }

    // c13
    {
        let getDesc = (level) => "c_13=1000^{" + level + "}";
        let getInfo = (level) => "c_13=" + getC13(level).toString(0);
        c13 = theory.createUpgrade(12, currency_M, new ExponentialCost(1e308, Math.log2(1e300)));
        c13.getDescription = (_) => Utils.getMath(getDesc(c13.level));
        c13.getInfo = (amount) => Utils.getMathTo(getInfo(c13.level), getInfo(c13.level + amount));
    }

    // c14
    {
        let getDesc = (level) => "c_14=2^{" + level + "}";
        let getInfo = (level) => "c_14=" + getC14(level).toString(0);
        c14 = theory.createUpgrade(13, currency_F, new ExponentialCost(50, Math.log2(1.6)));
        c14.getDescription = (_) => Utils.getMath(getDesc(c14.level));
        c14.getInfo = (amount) => Utils.getMathTo(getInfo(c14.level), getInfo(c14.level + amount));
    }

    // c15
    {
        let getDesc = (level) => "c_15=2^{" + level + "}";
        let getInfo = (level) => "c_15=" + getC15(level).toString(0);
        c15 = theory.createUpgrade(14, currency_F, new ExponentialCost(1e4, Math.log2(3)));
        c15.getDescription = (_) => Utils.getMath(getDesc(c15.level));
        c15.getInfo = (amount) => Utils.getMathTo(getInfo(c15.level), getInfo(c15.level + amount));
    }

    /////////////////////
    // Permanent Upgrades
    theory.createPublicationUpgrade(0, currency_M, 1e7);
    theory.createBuyAllUpgrade(1, currency_M, 1e12);
    theory.createAutoBuyerUpgrade(2, currency_M, 1e90);

    ///////////////////////
    //// Milestone Upgrades
    theory.setMilestoneCost(new LinearCost(25, 25));

    {
        c1Exp = theory.createMilestoneUpgrade(0, 3);
        c1Exp.description = Localization.getUpgradeIncCustomExpDesc("c_1", "0.05");
        c1Exp.info = Localization.getUpgradeIncCustomExpInfo("c_1", "0.05");
        c1Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c2Exp = theory.createMilestoneUpgrade(1, 3);
        c2Exp.description = Localization.getUpgradeIncCustomExpDesc("c_2", "0.05");
        c2Exp.info = Localization.getUpgradeIncCustomExpInfo("c_2", "0.05");
        c2Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c3Exp = theory.createMilestoneUpgrade(2, 3);
        c3Exp.description = Localization.getUpgradeIncCustomExpDesc("c_3", "0.05");
        c3Exp.info = Localization.getUpgradeIncCustomExpInfo("c_3", "0.05");
        c3Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c4Exp = theory.createMilestoneUpgrade(3, 3);
        c4Exp.description = Localization.getUpgradeIncCustomExpDesc("c_4", "0.05");
        c4Exp.info = Localization.getUpgradeIncCustomExpInfo("c_4", "0.05");
        c4Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c5Exp = theory.createMilestoneUpgrade(4, 3);
        c5Exp.description = Localization.getUpgradeIncCustomExpDesc("c_5", "0.05");
        c5Exp.info = Localization.getUpgradeIncCustomExpInfo("c_5", "0.05");
        c5Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c6Exp = theory.createMilestoneUpgrade(5, 3);
        c6Exp.description = Localization.getUpgradeIncCustomExpDesc("c_6", "0.05");
        c6Exp.info = Localization.getUpgradeIncCustomExpInfo("c_6", "0.05");
        c6Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c7Exp = theory.createMilestoneUpgrade(6, 3);
        c7Exp.description = Localization.getUpgradeIncCustomExpDesc("c_7", "0.05");
        c7Exp.info = Localization.getUpgradeIncCustomExpInfo("c_7", "0.05");
        c7Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }

    {
        c8Exp = theory.createMilestoneUpgrade(7, 3);
        c8Exp.description = Localization.getUpgradeIncCustomExpDesc("c_8", "0.05");
        c8Exp.info = Localization.getUpgradeIncCustomExpInfo("c_8", "0.05");
        c8Exp.boughtOrRefunded = (_) => theory.invalidatePrimaryEquation();
    }
    
    /////////////////
    //// Achievements
    achievement1 = theory.createAchievement(0, "Start greek", "Buy 1 c1.", () => c1.level > 0);
    achievement2 = theory.createSecretAchievement(1, "You 2 C", "Buy 1 c2.", "While 2 c", () => c2.level > 0);
    achievement3 = theory.createSecretAchievement(2, "Tirman", "Buy 1 c3.", "Collecting this three?", () => c3.level > 0);
    achievement4 = theory.createSecretAchievement(3, "Goodspeed!", "Buy 1 c4.", "Yes", () => c4.level > 0);
    achievement5 = theory.createSecretAchievement(4, "Nice Jackpot!", "Buy 1 c5.", "Monkes", () => c5.level > 0);
    achievement6 = theory.createSecretAchievement(5, "1 Monkey", "first monkey!?!??!?", "1 Monkes", () => currency_M.value > 1);
    achievement7 = theory.createSecretAchievement(6, "What This Happend?", "Buy 1 c6.", "Filled", () => c6.level > 0);
    achievement8 = theory.createSecretAchievement(7, "Last One!", "Buy 1 c7.", "Filled", () => c7.level > 0);
    achievement9 = theory.createSecretAchievement(8, "You Win!!!", "Buy 1 c8.", "Ohu Do You?", () => c8.level > 0);
    achievement10 = theory.createSecretAchievement(9, "100 Monkey", "aaaaaaaaaaa", "|_Huh_|", () => currency_M.value > 100);
    achievement11 = theory.createSecretAchievement(10, "MM", "huh", "did look?", () => currency_M.value > 1e6);
    achievement12 = theory.createSecretAchievement(11, "Trillion _/|", "number", "spend?", () => currency_M.value > 1e12);
    achievement12 = theory.createSecretAchievement(12, "Get to Avabailble Upgrade", "what", "what", () => c13.level > 0);

    ///////////////////
    //// Story chapters
    chapter1 = theory.createStoryChapter(0, "My First Chapter", "This is line 1,\nand this is line 2.\n\nNice.", () => c1.level > 0);
    chapter2 = theory.createStoryChapter(1, "My Second Chapter", "This is line 1 again,\nand this is line 2... again.\n\nNice again.", () => c2.level > 0);

    updateAvailability();
}

var updateAvailability = () => {
    c2Exp.isAvailable = c1Exp.level > 0;
}

var tick = (elapsedTime, multiplier) => {
    let dt = BigNumber.from(elapsedTime * multiplier);
    let bonus = theory.publicationMultiplier;
    currency_M.value += currency.value.pow(0.7)
    currency_F.value += currency.value.pow(0.5)
    currency.value += dt * bonus * getC1(c1.level).pow(getC1Exponent(c1Exp.level)) *
                                   getC2(c2.level).pow(getC2Exponent(c2Exp.level)) *
                                   getC3(c3.level).pow(getC3Exponent(c3Exp.level)) *
                                   getC4(c4.level).pow(getC4Exponent(c4Exp.level)) *
                                   getC5(c5.level).pow(getC5Exponent(c5Exp.level)) *
                                   getC6(c6.level).pow(getC6Exponent(c6Exp.level)) *
                                   getC7(c7.level).pow(getC6Exponent(c7Exp.level)) *
                                   getC8(c8.level).pow(getC8Exponent(c8Exp.level)) *
                                   getC9(c9.level) *
                                   getC10(c10.level) *
                                   getC11(c11.level) *
                                   getC12(c12.level) *
                                   getC13(c13.level) *
                                   getC14(c14.level) *
                                   getC15(c15.level);
}

var getPrimaryEquation = () => {
    let result = "\\dot{\\rho} = c_1";

    if (c1Exp.level == 1) result += "^{1.05}";
    if (c1Exp.level == 2) result += "^{1.1}";
    if (c1Exp.level == 3) result += "^{1.15}";

    result += "c_2";

    if (c2Exp.level == 1) result += "^{1.05}";
    if (c2Exp.level == 2) result += "^{1.1}";
    if (c2Exp.level == 3) result += "^{1.15}";

    result += "c_3";

    if (c3Exp.level == 1) result += "^{1.05}";
    if (c3Exp.level == 2) result += "^{1.1}";
    if (c3Exp.level == 3) result += "^{1.15}";

    result += "c_4";

    if (c4Exp.level == 1) result += "^{1.05}";
    if (c4Exp.level == 2) result += "^{1.1}";
    if (c4Exp.level == 3) result += "^{1.15}";

    result += "c_5";

    if (c5Exp.level == 1) result += "^{1.05}";
    if (c5Exp.level == 2) result += "^{1.1}";
    if (c5Exp.level == 3) result += "^{1.15}";

    result += "c_6";

    if (c6Exp.level == 1) result += "^{1.05}";
    if (c6Exp.level == 2) result += "^{1.1}";
    if (c6Exp.level == 3) result += "^{1.15}";

    result += "c_7";

    if (c7Exp.level == 1) result += "^{1.05}";
    if (c7Exp.level == 2) result += "^{1.1}";
    if (c7Exp.level == 3) result += "^{1.15}";

    result += "c_8";

    if (c8Exp.level == 1) result += "^{1.05}";
    if (c8Exp.level == 2) result += "^{1.1}";
    if (c8Exp.level == 3) result += "^{1.15}";

    return result;
}

var getSecondaryEquation = () => theory.latexSymbol + "=\\max\\rho";
var getPublicationMultiplier = (tau) => tau.pow(0.177) / BigNumber.THREE;
var getPublicationMultiplierFormula = (symbol) => "\\frac{{" + symbol + "}^{0.177}}{3}";
var getTau = () => currency.value;
var get2DGraphValue = () => currency.value.sign * (BigNumber.ONE + currency.value.abs()).log10().toNumber();

var getC1 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC2 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC3 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC4 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC5 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC6 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC7 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC8 = (level) => Utils.getStepwisePowerSum(level, 2, 10, 0);
var getC9 = (level) => BigNumber.TWO.pow(level);
var getC10 = (level) => BigNumber.TWO.pow(level);
var getC11 = (level) => BigNumber.TWO.pow(level);
var getC12 = (level) => BigNumber.TEN.pow(level);
var getC13 = (level) => BigNumber.from(1000).pow(level);
var getC14 = (level) => BigNumber.TWO.pow(level);
var getC15 = (level) => BigNumber.TWO.pow(level);
var getC1Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC2Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC3Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC4Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC5Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC6Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC7Exponent = (level) => BigNumber.from(1 + 0.05 * level);
var getC8Exponent = (level) => BigNumber.from(1 + 0.05 * level);

init();