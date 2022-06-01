import { StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { makeCombatTable } from './combat'
import { makeSquadTable } from './squad'

export class TablesModule extends Construct {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id)
    makeSquadTable(this)
    makeCombatTable(this)
  }
}
