/**
 * Created by mahnaz on 04-05-2017.
 */
import {observable, action, computed} from "mobx";
import fetchHelper from "./fetchHelpers"
const URL = require("../../package.json").serverURL
class searchStore {


    @action
    getData = () => {
        this.errorMessage = "";
        this.messageFromServer = "";

        const options = fetchHelper.makeOptions("GET", true);
        fetch(URL + "api/demouser/complete", options)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setData(res);
                console.log(res);
            }).catch(err => {
            //This is the only way (I have found) to verify server is not running
            this.setErrorMessage(fetchHelper.addJustErrorMessage(err));
        })
    }
}