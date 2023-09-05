'use client'
export default function Students({params}) {
    console.log(params);
  return (
    <div>
      <h1>student list</h1>
        <h3>name : {params.students}</h3>
    </div>
  )
}
