//assume action types are defined/imported

  
const INITIAL_STATE = [
    // structured as list objects with categoryNames & objects associated with it.
// examples

    {
        categoryName: "category1",
        // item list as objects
        items:[
            {
                itemName:"it1",
                id:1,
                name:"sdf",//etc
            },
            {
                itemName:"it2",
                id:2,
                name:"sdf",//etc
            },
        ],
        
    },

    {
        categoryName:"category2",

        items:[
            {
                itemName:"it1",
                id:1,
                name:"sdf",//etc
            },
            {
                itemName:"it2",
                id:2,
                name:"sdf",//etc
            },
        ],
        
    }
];

//example reducers
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_CATEGORY:
          //action.payload will be object with  ex ==> {categoryName:"new cat",items:[]}
        return [...state, Object.assign({}, action.payload)];

      case DELETE_CATEGORY:
        return [ ...state, state.filter(function(cat) {
            //input action.payload will be string of object name
            return cat.categoryName != action.payload;
            })
        ];
        //for update we can do similar to delete by using map() & update the matched category and keep remaining state same
      
        case ADD_ITEM:
        return [
            ...state,
            state.map(function(cat,i) {
                if(cat.categoryName == action.payload.categoryName){
                    return[
                        ...state[i],
                        Object.assign({}, action.payload.id)
                    ]
                }

            })
        ];
  
      default:
        return state;
    }
  };