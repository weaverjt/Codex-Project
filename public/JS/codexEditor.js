//Diagram Library Tutorial    
/*
First initialize:
+Make a function with a variable ('$')
that will make a graph object when called
('go.GraphObject.make')

+Next call that var($) on the HTML element 
that your graph will target and pass in
 'go.diagram' and the id of the element.

 +Store it in another variable.*/
    function init () {
        var $ = go.GraphObject.make;
        codexMap = $(go.Diagram, "codexMap");

/* 
Then create node and link Data arrays:

+Node-Data needs a 'key.' If one isn't assigned, 
a unique key will automatically be assigned to it.

+Link-Data does not need a key. */
        //node and link data
        var nodeDataArray = [
            {key: "Alpha"},
            {key: "Beta"}
        ];
        var linkDataArray = [
            {to: "Beta", from: "Alpha"}
        ];

/*
Next set the diagram-links model to a new graph-links model.
When making graph-links-model, pass in node and link data arrays */
        codexMap.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);



    }
