import { FormControl, FormLabel, Input } from "@chakra-ui/react"

const Inputs =(props) => {
    return (
        <>
         <FormControl my='0.5em'>
         <FormLabel>{props.label}</FormLabel>
         <Input placeholder={props.placehold} type={props.type} border={'1px solid #3080b4ff'} {...props}/>
         </FormControl>
        </>
    )
}

export default Inputs 