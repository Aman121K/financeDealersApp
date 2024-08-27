import React from "react";
import { Image, TouchableOpacity} from "react-native";
import { Images } from "../Images";
import { useNavigation } from "@react-navigation/native";
const CustomHeader=()=>{
    const navigation=useNavigation()
    const onClickBackButton=()=>{
        navigation.goBack()
    }
    return(
        <TouchableOpacity onPress={()=>onClickBackButton()}>
            <Image source={Images.Back}/>
        </TouchableOpacity>
    )
}
export default CustomHeader