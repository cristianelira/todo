import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',    
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius:8,
    fontSize: 14,
    width: "86%",
    height:64,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  checkImg:{
    width:24,
    height:24,
    marginLeft: 12,
    marginRight: 8
  },
  task:{
    color: '#F2F2F2',
    flex: 1,

  },
  button:{
    
  },
  buttonImg:{
    width: 32,
    height: 32,
    marginLeft: 8,
    marginRight: 8
  }
})