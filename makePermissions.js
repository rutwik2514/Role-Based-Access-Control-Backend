var fs = require('fs');


//need setup so that nodemon does not keep restarting
function setup() {
    // Check if nodemon.json exists before creating it
    if (!fs.existsSync('nodemon.json')) {
        const nodemonConfig = {
            ignore: ["permissions.js","preet.js"]
        };

        fs.writeFileSync('nodemon.json', JSON.stringify(nodemonConfig, null, 2));
        console.log('nodemon.json configuration saved!');
    } else {
        console.log('nodemon.json already exists, skipping creation.');
    }
}


module.exports = async function makePermissions() {
    const res = await setup();
    validPermissions = [
        "cando1",
        "cando2",
        "cando3",
        "cando4",
        "cando5",
        "cando6",
        "cando7",
        "cando8",
    ]
    let roles = [
        {
            name: "Test1",
            permissions: ["cando1", "cando3", "cando5"]
        },
        {
            name: "Test2",
            permissions: ["cando1", "cando3", "cando5"]
        }
    ]

    let roleArray = [];
    function addRole(role, values) {
        const dynamicVariableName = `${role.toUpperCase()}`;
        roleArray[dynamicVariableName] = values;
    }
    for (let i = 0; i < roles.length; i++) {
        addRole(roles[i].name, roles[i].permissions);

    }

    const permissionsAsString = validPermissions.map(permission => `"${permission}"`);
    let longBlockOfCode = `exports.PERMISSIONS = [${permissionsAsString.join(', ')}]; \n`

    for (let key in roleArray) {
        // console.log(key, roleArray[key]);
        let rolePermissions = roleArray[key].map(permission => `"${permission}"`);
        longBlockOfCode += `exports.${key} = [${rolePermissions.join(', ')}]; \n`
    }
    fs.writeFile('permissions.js', longBlockOfCode, function (err) {
        if (err) throw err;
        console.log('Permissions Saved!');
    });
    let newBlockOfCode= "preet ki job nhi lagegi";
    fs.writeFile('preet.js',newBlockOfCode,function (err) {
        if (err) throw err;
        console.log('Permissions Saved!');
    })
    // console.log("long block of code is", longBlockOfCode);
}
