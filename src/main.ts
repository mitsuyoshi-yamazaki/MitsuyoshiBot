import { ErrorMapper } from "ErrorMapper"
import { hoge } from "test"

export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Hello, World`)
  hoge()
})
