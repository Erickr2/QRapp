
export const useForm = () => {

    
    
    const onInputChange = (name, value) => {

        setForm({
          ...Form,
          [name]: value
        })
      }

      return {
        ...Form,
        Form,
        onInputChange,
      }

}
