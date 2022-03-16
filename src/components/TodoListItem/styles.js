import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    body:{
        width:"70%",
        textAlign:"start",
        textDecoration: ({complete}) => complete ? 'line-through' : "none"
    },
    container:{
        display:"flex",
        padding: theme.spacing(2),
        gap:theme.spacing(1),
        alignItems:"center",
        justifyContent:"space-between",
        borderBottom: `1px solid ${theme ? "#36384d" : "#ebeaee"}`,
        color: ({theme}) => theme ? "#5a586e" : "#9fa1ba",
        backgroundColor: ({theme}) => theme ? "#fff" : "#25273c",
    },
    checkBox:{
      borderRadius:"50%",
      border:"1px solid #36384d",
      height:"25px",
      width:"25px",
      backgroundSize:"cover",
      padding:theme.spacing(0.5),
      "&:hover":{
        border:"1px solid #ebeaee"
      }
    },
    delete:{
      visibility: ({show}) => show ? "visible" : "hidden",
    }

}));
