import { Panel, PanelGroup } from 'rsuite';
import Selection from "../../ui/preferences/selection";

export default function Box() {
    return (
        <Panel header="Preferences" bordered>
            <Selection />
        </Panel>
    );
}