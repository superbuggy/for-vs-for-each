
// Execution Functions
const getInfo = thing => `${ thing.constructor.name }(${ thing.length || Object.keys(thing).length })`

const runTrial = (fn, ...args) => {
  console.time(fn.name)
  const output = fn(...args)
  console.timeEnd(fn.name)
  console.log(`${fn.name}(${getInfo(...args)}) => ${getInfo(output)}`)
  return output
}

const runTrials = (fns, inputs) => {
  inputs.forEach((input,i) => {
    console.log(`*-------------START TRIAL ${i}--------------*`)
    fns.forEach(fn => {
      console.log(`..........................................`)
      runTrial(fn, input)
    })
    console.log(`..........................................`)
    console.log(`*--------------END TRIAL ${i}---------------*\n`)
  })
}

// Data-Set Generating Functions
const buildArray = length => [...Array(length)].fill(0).map((_, i) => ++i)
const buildRandomArray = length => [...Array(length)].fill(0).map(_ => parseInt(Math.random() * length))

// TEST INPUTS
const ORDER_OF_MAGNITUDE = 6
const INPUT = runTrial(buildArray, 10 ** ORDER_OF_MAGNITUDE)
const RANDOM_INPUT = runTrial(buildRandomArray, 10 ** ORDER_OF_MAGNITUDE)

const reduce = array => array.reduce((a,c)=>(a[c]=a[c]||0+1,a),{})

const forLoop = (input) => {
  let r = []
  for (let index = 0; index < input.length; index++) {
    r.push(input[index])
  }
  return r
}

const forEach = (input) => {
  let r = []
  input.forEach(n => {
    r.push(n)
  })
  return r
}

// Trials
let trialFunctions = [reduce, forEach, forLoop]
let inputs = [INPUT, RANDOM_INPUT]
runTrials(trialFunctions, inputs)
