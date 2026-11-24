import {expect,test} from "@playwright/test"
import Checkout from "../Pages/Checkout"
import OrderSummary from "../Pages/OrderSummary"
import Logout from "../Pages/Logout"
const Login = require('../Pages/Login') //To Import
const Dashboard = require('../Pages/Dashboard') //To Import
const Cart = require('../Pages/Cart') //To Import

test("SauceDemo Full Automation POM - Login", async({page})=>{
    const login = new Login(page); //Object creation
    await login.gotoLoginPage();
    await login.loginToPage("standard_user","secret_sauce");

})

test("Dashboard", async({page})=>{
     // Login
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");

    // Dashboard
    const dashboard = new Dashboard(page);
    await dashboard.DashboardPage();
    await dashboard.removeItem();
    await dashboard.gotoDashboardPagetoCart();
});


test("Cart Page - Remove Item", async ({ page }) => {
     // Login
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");

    // Dashboard
    const dashboard = new Dashboard(page);
    await dashboard.DashboardPage();
    await dashboard.removeItem();
    await dashboard.gotoDashboardPagetoCart();
    

    // Cart
    const cart = new Cart(page);
    await cart.removeItemFromCart();
    await cart.gotoContinueshoppingfromCart();
    await dashboard.gotoDashboardPagetoCart();
   

});

test("Checkout Page", async ({ page }) => {

     // Login
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");

    // Dashboard
    const dashboard = new Dashboard(page);
    await dashboard.DashboardPage();
    await dashboard.removeItem();
    await dashboard.gotoDashboardPagetoCart();
    

    // Cart
    const cart = new Cart(page);
    await cart.removeItemFromCart();
    await cart.gotoContinueshoppingfromCart();
    await dashboard.gotoDashboardPagetoCart();
   
   

    //CheckOut
     const checkout = new Checkout(page)
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCancelfromCheckout();
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCheckoutPage();
    await checkout.ContinuefromCheckout();
});

test("Order Summary Page", async ({ page }) => {

    // Login
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");

    // Dashboard
    const dashboard = new Dashboard(page);
    await dashboard.DashboardPage();
    await dashboard.removeItem();
    await dashboard.gotoDashboardPagetoCart();
    

    // Cart
    const cart = new Cart(page);
    await cart.removeItemFromCart();
    await cart.gotoContinueshoppingfromCart();
    await dashboard.gotoDashboardPagetoCart();
   
   

    //CheckOut
     const checkout = new Checkout(page)
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCancelfromCheckout();
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCheckoutPage();
    await checkout.ContinuefromCheckout();

    //Order summary
    const ordersummary = new OrderSummary(page)
    await ordersummary.gotoCancelfromOrderSummary();
    await dashboard.gotoDashboardPagetoCart();
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCheckoutPage();
    await checkout.ContinuefromCheckout();
    await ordersummary.gotoOrderSummaryPage();
});

test("Logout", async ({ page }) => {

    // Login
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce");

    // Dashboard
    const dashboard = new Dashboard(page);
    await dashboard.DashboardPage();
    await dashboard.removeItem();
    await dashboard.gotoDashboardPagetoCart();
    

    // Cart
    const cart = new Cart(page);
    await cart.removeItemFromCart();
    await cart.gotoContinueshoppingfromCart();
    await dashboard.gotoDashboardPagetoCart();
    //CheckOut
     const checkout = new Checkout(page)
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCancelfromCheckout();
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCheckoutPage();
    await checkout.ContinuefromCheckout();

    //Order summary
    const ordersummary = new OrderSummary(page)
    await ordersummary.gotoCancelfromOrderSummary();
    await dashboard.gotoDashboardPagetoCart();
    await cart.gotoCheckoutfromCart();
    await checkout.gotoCheckoutPage();
    await checkout.ContinuefromCheckout();
    await ordersummary.gotoOrderSummaryPage();
    //Logout
    const logout = new Logout(page);
    await logout.gotoMainMenu();

});
