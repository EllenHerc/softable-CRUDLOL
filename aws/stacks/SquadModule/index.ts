import { Stack, StackProps } from "aws-cdk-lib"
import { Construct } from "constructs"
import { SquadModuleLambdas } from "./infra/lambdas"

export class SquadModule extends Stack {
    constructor(app: Construct, name: string, props?: StackProps) {
      super(app, name, props)
      new SquadModuleLambdas(this, 'SquadModuleLambdas')
    }
  }