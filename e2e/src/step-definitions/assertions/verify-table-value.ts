import {DataTable, When, Then} from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import { ScenarioWorld } from '../setup/world';
import {getElementLocator} from "../../support/web-element-helper";
import {waitFor, waitForSelector} from '../../support/wait-for-behavior';
import {logger} from "../../logger";
import {getTableData} from "../../support/html-behavior";

When(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable){
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`the ${elementKey} should ${negate?'not':''} equal the following: ${dataTable}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async() => {

            const elementStable = await waitForSelector(page, elementIdentifier);

            if (elementStable){
                const tableData = await getTableData(page, elementIdentifier);
                return tableData === JSON.stringify(dataTable.raw()) === !negate
            } else {
                return elementStable
            }
        });
    }
)