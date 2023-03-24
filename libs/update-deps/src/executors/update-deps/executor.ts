import type { ExecutorContext } from '@nrwl/devkit'
import { exec } from 'child_process'
import { promisify } from 'util'

const fs = require('fs')

export interface UpdateDepsExecutorOptions {}

export default async function updateDeps(
  options: UpdateDepsExecutorOptions,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  console.info(`Executing "update-deps"...`)

  // console.log(
  //   'Context: ',
  //   context.projectGraph.dependencies['react'].filter(
  //     (d) => !d.target.startsWith('npm:')
  //   )
  // )

  console.log('Context: ', context)

  const pkg = JSON.parse(
    fs.readFileSync(`libs/${context.projectName}/package.json`)
  )
  console.log(`existing package.json for ${context.projectName}`, pkg)

  const { stdout, stderr } = await promisify(exec)(`echo "hello world"`)
  console.log(stdout)
  console.error(stderr)

  const success = !stderr
  return { success }
}
