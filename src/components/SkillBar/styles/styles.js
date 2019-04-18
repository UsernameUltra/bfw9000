import { StyleSheet } from "aphrodite";
import { 
    // std_bg,
    white,
    trns,
    // danger,
    black,
    read_back,
} from '../../../styles/colors/colors';
export const skillbar_styles = StyleSheet.create({
    skill:{
        backgroundColor:'red',
        position:'relative',
        height: '24px',
        marginBottom:'8px',
        // width:'calc(100% - 20px)',
        width:'100%',
        // maxWidth:'calc(100% - 19px)',
        borderRadiusTopRight:'150px',
    },
    triangle1:{
        position:'absolute',
        zIndex:'100',
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 0 30px 70px',
        borderColor: `${trns} ${trns} ${black} ${trns}`,
        // borderStyle: 'inset',
    },
    triangle2:{
        position:'absolute',
        zIndex:'150',
        top: 0,
        right: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '0 70px 30px 0',
        borderColor: `${trns} ${black} ${trns} ${trns}`,
        // borderStyle: 'inset',
    },
});