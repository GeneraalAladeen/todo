import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    body:{
        width:"70%",
        textAlign:"start"
    },
    container:{
        backgroundColor:({theme}) => theme ? "#fff" : "#181824",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundPosition:"top center",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        alignItems:"center",
        justifyContent:"center",
    },
    clear:{
        "&:hover":{
            color:"#fff",
            cursor:"pointer"
        },
    },
    todoTitle:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:theme.spacing(1)
    },
    todoSection:{
        width:"400px",
        height:"60%",
        display:'flex',
        flexDirection:"column",
        gap:theme.spacing(2),
        "& p":{
            fontSize:"12px",
            color:"#9fa1ba",

        }
    },
    bottomSection:{
        display:"flex",
        borderBottomLeftRadius:"8px",
        borderBottomRightRadius:"8px",
        padding: theme.spacing(2),
        gap:theme.spacing(1),
        justifyContent:"space-between",
        color:"#9fa1ba",
        backgroundColor: ({theme}) => theme ? "#fff" : "#25273c",
        boxShadow: ({theme}) => theme ? "1px 20px 30px 4px #ccc" : "none",
        fontSize:"12px"
    },
    todoListSection:{
        margin:0,
        borderTopLeftRadius:"8px",
        borderTopRightRadius:"8px",
        boxShadow: ({theme}) => theme ? "1px 20px 30px 4px #ccc" : "none",
        height:"300px",
        overflowY:"scroll",
        "&::-webkit-scrollbar":{
            height:"2px",
            width:0
        }
    },
    filter:{
        display:"flex",
        gap:theme.spacing(1)
    },
    filterOptions:{
        "&:hover":{
            color:"#fff",
            cursor:"pointer"
        }
    }

}));
