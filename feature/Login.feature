
Feature: Login to Flowkl blog

    #Login001-Positive case: Valid ceredentials
    Scenario: Login to Flowkl blog with valid credentials
        Given Login001 User access Flowkl homepage
        When Login001 User enter valid email
        When Login001 User enter valid password
        Then Login001 Click login button
        #Then Login001 User is navigated to homepage

    #Login002-Negative case: Invalid ceredentials
    Scenario: Login to Flowkl blog with invalid credentials
        Given Login002 User access Flowkl homepage
        When Login002 User enter invalid email
        When Login002 User enter invalid password
        When Login002 Click login button
        Then Login002 Unsuccessful Login 

    #Login003-Negative case: Incomplete ceredentials
    Scenario: Login to Flowkl blog with incomplete
        Given Login003 User access Flowkl homepage
        When Login003 User enter valid email
        When Login003 Click login button
        Then Login003 User unsuccessful login 

    #Login004-Negative case: No input
    Scenario: Login to Flowkl blog without input
        Given Login004  User access Flowkl homepage
        When Login004 Go to Login Page
        When Login004 Click login button
        Then Login004 User unsuccessful login 

    #Login005-Positive case: Remember ceredentials
    Scenario: Login to Flowkl blog and remember credentials
        Given Login005 User access Flowkl homepage
        When Login005 User enter valid email
        When Login005 User enter valid password
        When Login005 Click Remember me
        When Login005 Click login button
        When Login005 Click logout button
        When Login005 Open new window
        Then Login005 User is navigated to homepage 

    #Login006-Positive case: Reset password
    Scenario: Reset password with valid email
        Given Login006 User access Flowkl homepage
        When Login006 User enter valid email
        When Login006 Click Forgot your password?
        When Login006 User input valid email
        When Login006 Click Send password reset link
        Then Login006 A success message must appear

    #Login007-Negative case: Reset password
    Scenario: Reset password with invalid email
        Given Login007 User access Flowkl homepage
        When Login007 Click Login button
        When Login007 Click Forgot your password?
        When Login007 User input invalid email
        Then Login007 Error message must appear