import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    body:{
        flex : "1 1 0",
        textAlign:"start",
        color: ({theme}) => theme ? "#9fa1ba" : "#616266",
        textDecoration: ({complete}) => complete ? 'line-through' : "none"
    },
    container:{
        display:"flex",
        borderRadius: ({ editable }) => editable && "8px",
        padding: theme.spacing(1 , 3),
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
      height:"15px",
      width:"15px",
      display:"flex",
      justifyContent:'center',
      alignItems:"center",
      background: ({complete}) => complete ? "linear-gradient(to right, #3483eb,  #ed32de 100%)" : "none" ,
      backgroundSize:"cover",
      padding:theme.spacing(0.5),
      "&:hover":{
        border:"1px solid #ebeaee"
      }
    },
    delete:{
      visibility: ({show , editable }) => (show && !editable) ? "visible" : "hidden",
    },
    input:{
      color: ({theme}) => theme ? "#5a586e" : "#9fa1ba",
      width: 250,
    }

}));
