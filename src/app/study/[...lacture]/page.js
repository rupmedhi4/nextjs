'use client'
export default function Lacture({params}) {
    console.log(params);
  return (
    <div>
      <h1>lacture 1</h1>
      <h1>{params.lacture[0]} </h1>
      <h1>{params.lacture[1]} </h1>
    </div>
  )
}
