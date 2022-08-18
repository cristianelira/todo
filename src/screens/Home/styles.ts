import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    width: '100%'
  },
  header:{
    backgroundColor: 'hsl(0, 0%, 5%)',
    height: 173,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',    
  },
  centraLogo:{
   
    justifyContent: 'center',
    alignItems: 'center'    
  },
  logoTodo:{
    width: 110,
    height: 32,
  },
  inclui:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    marginLeft: 24,
    marginRight: 24,
    marginTop: -27,
  },
  input: {
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    height:54,
    backgroundColor: '#262626',
    borderRadius: 6,
    
    borderStyle: 'solid',
    borderWidth:1,
    color: '#f2f2f2',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,    
    width:52,
    height:52,
    backgroundColor: '#1e6f9f',
    borderRadius: 6,
    marginLeft: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  plus:{
    width: 16,
    height: 16,
  },
  content: {
    flex: 1,
    padding: 24,
    marginTop: 8,
  },
  tasks:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    width: '100%',
   

  },
  counters:{
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  created: {
    color:'#4ea8de', 
    fontSize: 14,
    fontWeight: 'bold'
        
  },
  done:{
    color:'#8284fa', 
    fontSize: 14,
    fontWeight: 'bold'
  },
  counterNum: {
    borderRadius: 999,
    color: '#D9D9D9',
    fontSize: 12,
    fontStyle: 'normal',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    width: 25,
    textAlign: 'center',
    marginLeft: 8

  },
  borderNum: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listEmptyText: {
    textAlign: 'center',
    alignItems: 'center',
    borderColor: '#333333',
    borderStyle: 'solid',
    borderTopWidth: 1,
    marginTop: 20,
    //height: '100%',
    //width: '100%',
    
  },
  clipBoard: {
    width: 56,
    height: 56,
    marginTop: 48
  },
  textEmpty:{
    //width: 287,
    //height: 40,
    marginTop: 16,
    fontSize: 14,
  
    textAlign: 'center',
    color: '#808080',
    //backgroundColor: 'blue'
    fontWeight: 'bold'
  },
  textEmpty2:{
    textAlign: 'center',
    color: '#808080',
    fontSize: 14,
  }

})