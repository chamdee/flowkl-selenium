Feature: Logout from Flowkl blog

    #Logout001-Positive case
    Scenario: Logout from Flowkl blog
        Given Logout001 User access Flowkl homepage
        When Logout001 User enter valid email
        When Logout001 User enter valid password
        When Logout001 Click login button
        Then Logout001 Click logout