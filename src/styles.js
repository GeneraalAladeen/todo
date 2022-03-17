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
        backgroundImage: ({bg }) => `url(${bg})`,
        alignItems:"center",
        justifyContent:"center",
        padding:theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
        backgroundImage: ({ bgMobile }) => `url(${bgMobile})`,
            
        }
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
        height:"50px",
        padding:theme.spacing(1),
        "& h1":{
            color:"#fff"
        },
        [theme.breakpoints.down("sm")]:{
            padding:theme.spacing(.5),
        }
    },
    todoSection:{
        width:"500px",
        flex: "1 1 0",
        height:"60%",
        display:'flex',
        flexDirection:"column",
        gap:theme.spacing(2),
        "& p":{
            fontSize:"12px",
            color: ({theme}) => theme ? "#616266" :"#9fa1ba" ,
            
        },
        [theme.breakpoints.down("sm")]:{
            width:"360px"
        }
    },
    bottomSection:{
        display:"flex",
        borderBottomLeftRadius:"8px",
        borderBottomRightRadius:"8px",
        padding: theme.spacing(1 , 2),
        gap:theme.spacing(1),
        justifyContent:"space-between",
        color:"#9fa1ba",
        backgroundColor: ({theme}) => theme ? "#fff" : "#25273c",
        boxShadow: ({theme}) => theme ? "1px 20px 30px 4px #ccc" : "none",
        fontSize:"12px"
    },
    todoListSection:{
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
        gap:theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    },
    filterOptions:{
        "&:hover":{
            color:"#fff",
            cursor:"pointer"
        },
    },
    mobileFilter:{
        display:"none",
        color:"#9fa1ba",
        borderRadius:"8px",
        backgroundColor: ({theme}) => theme ? "#fff" : "#25273c",
        padding: theme.spacing(1),
        [theme.breakpoints.down("sm")]:{
            display:"flex",
            justifyContent:"center",
            gap: theme.spacing(2)
        }
    }

}));
