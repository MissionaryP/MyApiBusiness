///////////////////////////////////////////////////////
Rest Assured API testing
///////////////////////////////////////////////////////
We have just created 2 features with all our tests. In order to run all the test, please run the following command:
`mvn clean test -DsuiteFile='ApiTestPetStoreRunner.xml'`

If you want to select the test that will be run, please add the correct hook on top of each scenario

Several scenarios have been created, including GET, POST, PUT and DELETE, using different URL from the pet store.
Please refer to `/MyApiBusiness/src/test/resources/venom/api/test/ApiTest/` in order to see the features created
for this test. All the scenarios have a very well put structure and it should be understandable for everyone.g

///////////////////////////////////////////////////////
K6 suggested tests:
///////////////////////////////////////////////////////

//See testScriptv1.js for the first k6 scenario
Demo for load testing (GET):
We will be focusing on one particular api, the inventory API from the pet store:
command: k6 run testScriptv1.js
Result that should give us the data from this api

After that we could try loading the API a bit, by using 20 users on the following test, for 60 seconds
command: k6 run --vus 20 --duration 60s k6-testScript.js, or could just add the run options inside the test as we did
and just simply do a command: k6 run testScripv1.js

We can also try amd increase the sleep time and check on the results. The amount of users that are able to hit the URL
should decrease if we increase this number.

//See testScriptv2.js for the second k6 scenario
Demo for post request:
We will be focusing on the user login API (*/user/login) from the pet store:
This test will be returning a lot of information that will be showed on the console, so we could run it using any of
the following commands:
//will return the information over the console
1: k6 run testScriptv2.js
//will return the information on a .csv file
2: k6 run --out csv=test-result.csv testScriptv2.js

Once we collect the information, we can start asserting looking for the parameters we consider and need to check.
