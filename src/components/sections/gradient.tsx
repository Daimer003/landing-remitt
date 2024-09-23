import { Box } from "@chakra-ui/react";


const Gradient = ({background, ...props}: any) => {
    return <Box
    display='flex' 
    w='600px'
    h='600px'
    position='absolute'
    zIndex={0}
    bg={background}
    {...props}
     />;
}
 
export default Gradient;