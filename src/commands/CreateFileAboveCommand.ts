import { SolutionExplorerProvider } from "@SolutionExplorerProvider";
import { TreeItem, ContextValues } from "@tree";
import { Action } from "@actions";
import { SingleItemActionsCommand } from "@commands";
import { MoveProjectFileDown } from "@actions";


export class CreateFileAboveCommand extends SingleItemActionsCommand {
    constructor(private readonly provider: SolutionExplorerProvider) {
        super('CreateFileAbove');
    }

    public shouldRun(item: TreeItem | undefined): boolean {
        return !!item && !!item.project && item.project.extension.toLocaleLowerCase() === 'fsproj' && !!item.path && item.contextValue.startsWith(ContextValues.projectFile);
    }

    public async getActions(item: TreeItem | undefined): Promise<Action[]> {
        if (!item || !item.project || !item.path) { return []; }
        console.log("m");
        return [];
        // return [new MoveProjectFileDown(item.project, item.path)];
    }
}
