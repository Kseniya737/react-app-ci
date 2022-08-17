import { Then } from '@cucumber/cucumber';
import {waitFor, waitForSelector} from '../../support/wait-for-behavior';
import { getElementLocator } from "../../support/web-element-helper";
import { ScenarioWorld } from ".././setup/world";
import { ElementKey } from "../../env/global";
import {logger} from "../../logger";
import {getElementText} from "../../support/html-behavior";

Then(
    /^the "([^"]*)" should( not)? equal the "([^"]*)" stored in global variables$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, variableKey: string){
        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this

        logger.log(`the ${elementKey} should ${negate?'not ':''}equal the ${globalVariables[variableKey]} stored in global variables`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);
            const variableValue = globalVariables[variableKey];
            if(elementStable){
                const elementText = await getElementText(page, elementIdentifier);
                return (elementText === variableValue) === !negate;
            } else {
                return elementStable
            }
        }, globalConfig, {target: elementKey});
    });

Then(
    /^the "([^"]*)" should( not)? contain the "([^"]*)" stored in global variables$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, variableKey: string){

        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this

        logger.log(`the ${elementKey} should ${negate?'not ':''}contain the ${globalVariables[variableKey]} stored in global variables`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {

            const variableValue = globalVariables[variableKey];
            const elementStable = await waitForSelector(page, elementIdentifier);
            if (elementStable){
                const elementText = await getElementText(page, elementIdentifier);
                return elementText?.includes(variableValue) === !negate;
            } else {
                return elementStable
            }
        }, globalConfig, {target: elementKey});
    }
)

