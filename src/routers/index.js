import Index0 from '../index0'
import My from '../my'
import Login from '../login'
import Newsinfo from '../newsinfo'
import Search from '../search'
import Collect from '../collect'
import Sign from '../sign'
import Mon from '../mon'
import Son1 from '../son1'
import Son2 from '../son2'
import Indexparent from '../indexparent'

const routes=[
    
   
    {
        path:'/login',
        component:Login    
    },
    {
        path:'/newsinfo/:id',
        component:Newsinfo    
    },
    {
        path:'/search',
        component:Search    
    },
    {
        path:'/collect',
        
        component:Collect    
    },
    {
        path:'/sign',
        component:Sign    
    },
    {
        path:'/mon',
        component:Mon,
        routes:[
            {
                path:'/mon/son1',
                component:Son1    
            },
            {
                path:'/mon/son2',               
                component:Son2
            },
        ]                        
    },
    {
        path:'/',        
        component:Indexparent,        
        routes:[
            {
                path:'/index0',
                component:Index0   
            },
            {
                path:'/my',
                component:My    
            },
         
        ]     
    },

]
export default routes