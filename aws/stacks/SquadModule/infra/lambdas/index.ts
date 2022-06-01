import { Construct } from "constructs";
import { makeCombatsSquadsDeleteSquadLambda } from "./functions/delete-squad";
import { makeCombatsSquadsGetSquadLambda } from "./functions/get-squad";
import { makeCombatsSquadsPutCombatLambda } from "./functions/put-combat";
import { makeCombatsSquadsPutSquadLambda } from "./functions/put-squad";

export class SquadModuleLambdas extends Construct {
    constructor(scope: Construct, id: string) {
      super(scope, id);
      makeCombatsSquadsGetSquadLambda(this);
      makeCombatsSquadsPutSquadLambda(this);
      makeCombatsSquadsDeleteSquadLambda(this);
      makeCombatsSquadsPutCombatLambda(this);
    }
  }