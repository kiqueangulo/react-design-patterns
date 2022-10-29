import React from "react"

export const UncontrolledForm = () => {
  const nameInput = React.createRef()
  const ageInput = React.createRef()
  const hairColorInput = React.createRef()

  const handleSubmit = e => {
    console.table({
      name: nameInput.current.value,
      age: ageInput.current.value,
      hairColor: hairColorInput.current.value,
    })

    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Name" ref={nameInput} />
      <input name="age" type="number" placeholder="Age" ref={ageInput} />
      <input name="hairColor" type="text" placeholder="Hair Color" ref={hairColorInput} />
      <input type="submit" value="Submit" />
    </form>
  )
}
