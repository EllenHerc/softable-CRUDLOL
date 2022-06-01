import { Construct } from 'constructs'
import { makeSquadsCombatsEllenApi } from './squad-api'

export class ApisModuleApis extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)
    makeSquadsCombatsEllenApi(this)
  }
}
