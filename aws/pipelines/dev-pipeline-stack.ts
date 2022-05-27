import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep
} from 'aws-cdk-lib/pipelines'

import { DevStage } from '../stages/dev-stage'

interface PipelineProps extends cdk.StackProps {
  repoName: string
  repoBranch: string
  repoConnectionArn: string
  pipelineName: string
}

export class DevPipelineStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: PipelineProps = {
      repoName: '',
      repoBranch: '',
      repoConnectionArn: '',
      pipelineName: 'MyPipeline'
    }
  ) {
    super(scope, id, props)

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: props.pipelineName,
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection(props.repoName, props.repoBranch, {
          connectionArn: props.repoConnectionArn
        }),
        commands: ['npm i', 'npm run build', 'npx cdk@latest synth']
      }),
      crossAccountKeys: true
    })

    pipeline.addStage(
      new DevStage(this, 'dev', {
        env: { account: '', region: '' }
      })
    )
  }
}
