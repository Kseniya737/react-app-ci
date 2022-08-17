import {Then} from '@cucumber/cucumber';
import {waitFor, waitForSelector, waitForSelectorInIframe} from "../../support/wait-for-behavior";
import {getElementLocator} from "../../support/web-element-helper";
import {ScenarioWorld} from "../setup/world";
import {ElementKey} from "../../env/global";
import {getElementWithinIframe, getIframeElement, getTextWithinIframeElement} from "../../support/html-behavior";
import {logger} from "../../logger";

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? be displayed$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeName: string, negate: boolean) {
        const {
            screen: {page},
            globalConfig,
        } = this

        logger.log(`the ${elementKey} on the ${iframeName} iframe should ${negate ? 'not ' : ''} be displayed`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iFrameIdentifier = getElementLocator(page, iframeName, globalConfig);

        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iFrameIdentifier);

            if (elementIframe) {
                const elementStable = await waitForSelectorInIframe(elementIframe, elementIdentifier)
                if (elementStable) {
                    const isElementVisible = await getElementWithinIframe(elementIframe, elementIdentifier) != null;
                    return isElementVisible === !negate;
                } else {
                    return elementStable;
                }
            }
        }, globalConfig, {target: elementKey})
    }
);

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeName: string, negate: boolean, expectedElementText: string) {
        const {
            screen: {page},
            globalConfig,
        } = this;

        logger.log(`the ${elementKey} on the ${iframeName} iframe should ${negate ? 'not ' : ''} contain the text ${expectedElementText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iFrameIdentifier = getElementLocator(page, iframeName, globalConfig);

        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iFrameIdentifier);

            if (elementIframe) {
                const elementStable = await waitForSelectorInIframe(elementIframe, elementIdentifier)
                if (elementStable) {
                    const elementText = await getTextWithinIframeElement(elementIframe, elementIdentifier);
                    return elementText?.includes(expectedElementText) === !negate;
                } else {
                    return elementStable;
                }
            }
        }, globalConfig, {target: elementKey});
    }
);

Then(
    /^the "([^"]*)" on the "([^"]*)" iframe should( not)? equal the text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, iframeName: string, negate: boolean, expectedElementText: string) {
        const {
            screen: {page},
            globalConfig,
        } = this;

        logger.log(`the ${elementKey} on the ${iframeName} iframe should ${negate ? 'not ' : ''} equal the text ${expectedElementText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const iFrameIdentifier = getElementLocator(page, iframeName, globalConfig);

        await waitFor(async () => {
            const elementIframe = await getIframeElement(page, iFrameIdentifier);

            if (elementIframe) {
                const elementStable = await waitForSelectorInIframe(elementIframe, elementIdentifier)
                if (elementStable) {
                    const elementText = await getTextWithinIframeElement(elementIframe, elementIdentifier);
                    return (elementText === expectedElementText) === !negate;
                } else {
                    return elementStable;
                }
            }
        }, globalConfig, {target: elementKey});
    }
);
