

describe("template spec", () => {
  /*it("passes", () => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
    cy.xpath("//input[@name='username']").type("Admin");
    cy.xpath("//input[@name='password']").type("admin123");
    cy.get(".orangehrm-login-button").click();
    cy.xpath("//span[text()='Leave']").click();
    //cy.get(".oxd-topbar-body-nav-tab-item").contains('Leave List').click();
    cy.get(".oxd-topbar-body-nav  ul")
      .contains("apply", { matchCase: false })
      .click();
    //cy.contains('ul', 'Apply').click();
    /*'Use of Regular expression in contains command'
    cy.get('.oxd-topbar-body-nav  ul').contains(/^M\w+/).click()

    cy.contains('ul', 'Apply').click()*/
  //});

  /*it("should", () => {
    cy.visit("https://www.saucedemo.com/v1/inventory.html");
    cy.get("select").select("za");
  });*/

  /*it.only("iframe hadling", () => {
    cy.visit('https://the-internet.herokuapp.com/tinymce')
       //let's test iframe
       cy.get('#mce_0_ifr')
           .should('be.visible')
           .then(($iframe) => {
               const $body = $iframe.contents().find('body')
      
       cy.wrap($body).clear().type("dummy fellow");
       })
  });*/

  /*/it("Alert pop up handling", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
  
   /* cy.on('window:confirm',(AcceptConfirm)=>{
      return false;
    })*/
   /* cy.window().then(function(PromotAlert)  {
      cy.stub(PromotAlert,"prompt").returns("nags abvd");
      cy.get(":nth-child(3) > button").click();
    })
  });*/
  it('Handling new Browser Tab', function() {
    cy.visit('https://the-internet.herokuapp.com/windows')
    cy.get('.example > a').invoke('removeAttr', 'target').click()
    cy.url()
      .should('include', '/windows/new')
    cy.get('h3')
      .should('have.text', 'New Window')
  })
});
