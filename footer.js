function footer(){
//  HEAD
  return ` <footer class="footer">
  <div class="footer-section">
    <div class="desc">
      <a href="https://imgbb.com/"><img id = "croppedImage" src="https://i.ibb.co/FxxC7Sr/zostel.png" alt="zostel" border="0" /></a>
      <p>
        Explore with Zostel - oldest & the biggest backpacker hostel brand
        of India. Travel India & Nepal on budget while having fun at our
        quirky, activity-led hostels.
      </p>
    </div>
    <div class="links">
      <div id='linksh3'><h3>USEFUL LINKS</h3></div>
      <div class="In-link">
        <ul>
          <li><a href="#">Zostel Homes</a></li>
          <li><a href="#">#ITravelGreen </a></li>
          <li><a href="#">Guest Policy </a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        <ul>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Franchise</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Passport</a></li>
        </ul>
        <ul class = "two">
          <li><a href="#">Community Manager</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Terms </a></li>
          <li><a href="#">COVID-19 FAQs</a></li>
        </ul>

      </div>
    </div>
    <div class="social-links">
    <h3 class="one" id='social_links_h3' >SOCIAL</h3>
    <div id="social-logo">
      <a href=""
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGUlEQVR4nOWb+28UVRTHBwz+5At0d7aE+CTR8JNGQeKfYDREBCX+gFFMEw2RiO3cIUAXiA8sFv3BH0wkJpBWiDEYEvyBGGGtVEBAK48mNZEYKoQKbefe6T6m3en1nNmltnbZncedOzvdk5xkX3P3fL5zz9y3ooRs6rtmMqWxVeDpFKH7VcLOpgi7pGpsGN6PoZdew2f4nca+gtdt4C/itWHHF4qldGMpQO1OafQ8AE4ADPfncC2UAcJ0pFqNp6LmqmoL0jfugmBbVEL7/ANXd1WjF/E/7m29fmfUvJO26B1jAQS2vVyNQwGfKQQbBqG33a8b8yNE53Ogiq4F+H9kgc8QgrChJKEblDSfKxU9oRuLIYCeqMArpMbxRIvxiBT4JsJeAOVHooau4EzVzDXhkUM1A/BP6gC0Vlp0CE+JJWl+e7l9jhzQpXcpzXyeMHh46n5XB1Be/bAAEfgcgN9bBzD+HGptoHSIQ87XcmDY5Q9eN1+WHeyjbSZ960Du9EdHCj/tO2ll9p+2Mp2nrMynRwvd5Nv8iTV7sueW7TSvLCTU9lgTVnmCd9p5jVEZ0Is2UavjB6ub5fkFznmRu7PC6i+y5z38j5HUjYdd4mMPT04n57V9uV/Hivxvl9DTbO3e3G/eUoF2I1vtqq+xdTLg9/RYGeAY9wPvR4BSKtBXq8I7AxtCr4cNTw7me4Bhwi+8bwEIHXxgw8g9t777hO4IG/6ZdvOybfPRIPD+BXC8rSI8judlDGl7B4rdQeGDCIAjyIrzCTjREDb84++zQYjdilIAxzW6sZIAXpoVX47tuwj4oALgzNJ0eN1YGjY8+sWrthcB8pn+8cyKz7N9i7cyU3QsC8nIE1Obvt0yBMhadr9L+MIrX2Z/DzOWaV1kGdUffbzIr7qhP9JXPBZ6PBrtLd19nLcPNHXt3sFybgTAai9BALtpI7tPcRYtJMCXBXBlj2035Uy5aWwldn621ZsAsuIBAbYquFzVqALAg7ATW4AzDSuAxn7BWZ+/GlUA8EsowFCjCoAjX0gBajWwAAWltEYfvLDl7eaAa8KAZuZtIf0EvPmKqGUumQL0X7OPi6kBbAj7AQNxE+Bg79gxQTXgsrBmUKYAWw7lfxYRM/gpHAgdiJsAz3422i9IgC5MgfdiJoD90BYzKyQFCN2Bg6GVcRIA1xEE3X2eJGxFeTgcHwEGmS2o604nUptY4uaMUOCckiVAz5/jGUHVv2/KjBBrD1rgg5tZ/o3O3Nlq7hayWhkotKAa8KH0SVG3JiOWJt14csq8sLMg+kejCIApP2OhFPfbNY4AxvqKS2PwJWsAAYxbbrUNe3G0LgTQWLoiPFoiPXgHdI2vzVYBcFtvzY3W8MM3Z6sATTprrgo/2SJo9PvZJwA96mqLjJMKpU1SwhckIxMAWDxskioZbooWvWQWjQB0QtXMlzzB3zToMHwcewGgm+8L3rE0nyty5Ui2APDU/0ZZzW/zLwBaM58HhR2OoQCHhO4YhwK74iIArvlhzELgJ610YGJX3Qvg5LzL5s6PBTkyE6oAGqPhHpmZYthPwL239SIAPOx+lHZo6j9zDlOsA78RlQD433AjXg+1ytcyHECpOiNudpkKFIBBd31n1X2/sg2DwUkV53hraALQC1D+2/PJ8N1R81a1pEaX46Tj/7ff+ROAngP/QNXp01Fz+bJEy2gK8vR5PF8MbF+DnwS/Aj7MSydEiuXX+NkJ/I1zFrmVPofXhh3fv5fxLIi8D7TvAAAAAElFTkSuQmCC"
      /></a>
      <a href=""
        ><img
          src="data:image/png;base64,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"
      /></a>
      <a href=""
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB8lBMVEUAAAAA//8Af/8Aqv8Av/8zmf8qqv8kkf8cqv8VqukTnOsko+wfn+8epfAcm/AYnfIXovMhpvMfn/Qeo/QdnPUbo/UZoe4gpO4enfAdoPAbnvEfofIeo/IdoPMcovMeo+8dofAeovEen/IdofIcoPIcofIbn/MboPMeovMen/MeofMdoPAcofAcn/AboPEbofEen/EdofIcovIcoPIbofIeoPIeovMdoPMdofMcovMcoPAcn/AboPEeofEdoPEdovEcoPEcofEbofIeoPIdoPIdofIdoPIcofAdoPEdofEdoPEdofEcofEcoPEcofEcn/IeoPIdoPIdofIcofIcofIdofEcoPEcofEcofEcofEdoPIdoPIcoPIcofIcofIdoPIcoPEdoPEdofEdoPEdoPIdofIcoPIdoPIdofIcoPEcofEcoPEcofEcoPEcoPIcofIdoPIdofIdofIcofIcoPEcoPEdofEdofEcoPEcoPEdoPIdofIdoPIdofIdofIcoPIcofIcoPIdoPEdofEdoPEcoPEcofEdoPIdoPIdofIcofIcoPIcofIdofEdofEcoPEcofEcoPEcoPEdoPEdoPIcoPIcofIcofIcoPIdofIdoPIdoPIdoPEcofEcofEcoPEcofEdoPEdoPEdofEdoPEdofKzG0RvAAAApXRSTlMAAQIDBAUGBwkMDQ4QERIVFhcYGRocHh8iIyUpKissMjQ6Ozw+P0BBQkNERkdISUpLT1BRUlRVVldYWVtcXV5gYWJlZmdoaW1vcHFyc3R1dnd5e31+gISFhoiKjI2OkZKXmpucnZ6gpaaoqaqrsLO0tba3ubu9vsHCw8bHyMnKy8zN0NLT1tfY2drd3t/i5Obn6Onr7O7v8PHy8/T29/j5+vv8/f5RF+LQAAACTElEQVR4Ae3B+T+TcQAH8M+zIWvuiESULCrCKqVDlA45uijJ0a071UTpoIuRkmsybcvz+T97WWbX8332PPvN6+X9xro1JOnYw0+/XN/fdFqMiEJyl5s+EzUGrMi+aYKXBeqqHAw0nI1lBY88nfBKWWyECqlVZrDpgnhLm510ZMCrhfJRiF1mGJeLy2rx30fSfRAiVpkCdyV4bfSQXDoDZaafFOgxYoO1DkA+vdokKLlCZa6GrCN3ZifTAFj434tUhDNOUdncb5KLOwCghCsmSxCmkCr+HsCybfSRb6ciRBvF3IfhFS9zlaMpDkEeUMhRhhXvGGD8nBkB+ikyshU+jQziuJGDVUMUacaqdCdDfGnNM8DLRpFL8LvKcA7btf35mwzdFDkPP7OdAp4FitQiQO48dauCT9EeoGiWehXCp4r26xXWH9QpAz67GA2nBB+zm1EYgt8Ao9AFvxOMQiX84iaom5yOAOXUbRBB7lGvZgSJ66U+8hYEi++hLjaEqZmiDhUIZ7rwlVqNGxGqbN/uvdVPZWpzCmHqqcNILMIkzlC7Sig4Tc36JCgw9FKjhSwoMg9Tm7MQSLBRi2cGiMRedDKi0QSoyGyfpbr5XKiL2d7YOU2hhZ2IKOkxhZxFiEQ6PkmhuWJEIJV/oNhYLtSlNnyjitfJUJFS2jK4RBWLTUYoKn7Z92rg8zwjGMyBSGKHk5GMHpKgIq1jjmpG6mIRgenkW5nKFu9bJGixuf75PEONdVvN0C4mr7r9yfuJmT+eGftw/62G0kysWxv+Ae4hAAX8UP/AAAAAAElFTkSuQmCC"
      /></a>
      <a href=""
        ><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUElEQVR4nO1aS2sTURQeV7oRH/ig0Nxp5t5ppYJSrdUgdCUodiGiFQTXLgTxAYqCD8SVogguFBVFF+JKtMVS/4BVF4pufNRHRdHUJDOZ2KYptuZ6zug0j2rV4twTmvvBl4Q87v3OlzOPc+8xDA0NDQ0NDQ0NjcnDtaxZCbaoxosInmR8uVtnt6aYvSagY1rrHSbaxxjhWxzGt5fQf6/oO/Cb4jFwTBwb58C5cM5Qg5KGMS0RjdanmNgMPJoyxcWUyTtB7EN4fgMiPzsmH3BMIWkJGkDLD02+tk5fK2oG7RgDxvLXgfeZ5gwYYA8M+pI+uP9EiAVi2i2FmD5h8JBWDF0kFxwSU4w/9pht/TL4uGUtgHT6QC0yfBPE+y9CzB9nAHxwl1qcQhO6S4Ovs1dSi1LNZG10RcEAU1yiFqQ8CyDmMQPgjVfUgpSTiV4/eI+xOeBGnlyQ+gzIp01zNvz7PEYthsyEqN1iuExsoxZCR3ur4ZriAL0QIjKxH6//p8OeKNO2QaZjrfQBlxHqhpN4BbgW9kSDBw/JfC4nc+cuSLdxKXnghQzgVzADulQYEOBbvF8O7t0nnTqb3ACsHA0VxU+xAQFGnjyVmY3t1BlwHw14TmGAj3xeDt+8JdPNMSoDnsEhwPvIDAh8yA7JoTNnpVu/WKkBcAi8hQwQcWoDAoz2vZMDO3YqNIF/xELIrRQDAny91yO9tW0qMiCFl8FspRngY2RUDl+/Id2mljAzYBAzYLQiDfiJvOfJ7LHj0uENYWTAiDbA0YdAtZ8Eq/4yqG+EqvxWGB4eUBhQCcUQVMI9cBLkd1QaUEnlMLADT4JXVRhQWBBZQh10gYxfxgWRU2FPVMFLYif0omjVL4vDneAqeiE09DdIq35rzN8cZaKXWpByMv5Cb48HSJuiiVqQaiYjVnN5i0w3tShl/z4TXeN6hLzaxrkqKkNq+k1SNfXzJmqTC704IuSj37bJBZiyjZIRseuPjZLFKGqV3QQ8AofHeRisA/fT4B76tb+SxHiGPjjUwD+hJixvQddt1AqvD6P2f26VnQySDQ0z+6PRhZhe2NDsMGt1abM0X1fSCO2zrFm6/HP4TckYMGaC8WU4B86Fc4YalIaGhoaGhobGVMd3bSuUOZbqHRsAAAAASUVORK5CYII="
      /></a>
    </div>
    <small class="one">Zostel © 2022. All Rights Reserved</small>
  </div>
</div>
</footer>`

    return `<footer class="footer">
    <div class="footer-section">
      <div class="desc">
        <a href="https://imgbb.com/"><img id = "croppedImage" src="https://i.ibb.co/FxxC7Sr/zostel.png" alt="zostel" border="0" /></a>
        <p>
          Explore with Zostel - oldest & the biggest backpacker hostel brand
          of India. Travel India & Nepal on budget while having fun at our
          quirky, activity-led hostels.
        </p>
      </div>
      <div class="links">
        <div><h3>USEFUL LINKS</h3></div>
        <div class="In-link">
          <ul>
            <li><a href="#">Zostel Homes</a></li>
            <li><a href="#">#ITravelGreen </a></li>
            <li><a href="#">Guest Policy </a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Careers</a></li>
          </ul>

          <ul>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Franchise</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Passport</a></li>
          </ul>

          <ul class = "two">
            <li><a href="#">Community Manager</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Terms </a></li>
            <li><a href="#">COVID-19 FAQs</a></li>
          </ul>
        </div>
      </div>
      <div class="social-links">
        <h3 class="one">SOCIAL</h3>
        <div id="social-logo">
          <a href=""
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGUlEQVR4nOWb+28UVRTHBwz+5At0d7aE+CTR8JNGQeKfYDREBCX+gFFMEw2RiO3cIUAXiA8sFv3BH0wkJpBWiDEYEvyBGGGtVEBAK48mNZEYKoQKbefe6T6m3en1nNmltnbZncedOzvdk5xkX3P3fL5zz9y3ooRs6rtmMqWxVeDpFKH7VcLOpgi7pGpsGN6PoZdew2f4nca+gtdt4C/itWHHF4qldGMpQO1OafQ8AE4ADPfncC2UAcJ0pFqNp6LmqmoL0jfugmBbVEL7/ANXd1WjF/E/7m29fmfUvJO26B1jAQS2vVyNQwGfKQQbBqG33a8b8yNE53Ogiq4F+H9kgc8QgrChJKEblDSfKxU9oRuLIYCeqMArpMbxRIvxiBT4JsJeAOVHooau4EzVzDXhkUM1A/BP6gC0Vlp0CE+JJWl+e7l9jhzQpXcpzXyeMHh46n5XB1Be/bAAEfgcgN9bBzD+HGptoHSIQ87XcmDY5Q9eN1+WHeyjbSZ960Du9EdHCj/tO2ll9p+2Mp2nrMynRwvd5Nv8iTV7sueW7TSvLCTU9lgTVnmCd9p5jVEZ0Is2UavjB6ub5fkFznmRu7PC6i+y5z38j5HUjYdd4mMPT04n57V9uV/Hivxvl9DTbO3e3G/eUoF2I1vtqq+xdTLg9/RYGeAY9wPvR4BSKtBXq8I7AxtCr4cNTw7me4Bhwi+8bwEIHXxgw8g9t777hO4IG/6ZdvOybfPRIPD+BXC8rSI8judlDGl7B4rdQeGDCIAjyIrzCTjREDb84++zQYjdilIAxzW6sZIAXpoVX47tuwj4oALgzNJ0eN1YGjY8+sWrthcB8pn+8cyKz7N9i7cyU3QsC8nIE1Obvt0yBMhadr9L+MIrX2Z/DzOWaV1kGdUffbzIr7qhP9JXPBZ6PBrtLd19nLcPNHXt3sFybgTAai9BALtpI7tPcRYtJMCXBXBlj2035Uy5aWwldn621ZsAsuIBAbYquFzVqALAg7ATW4AzDSuAxn7BWZ+/GlUA8EsowFCjCoAjX0gBajWwAAWltEYfvLDl7eaAa8KAZuZtIf0EvPmKqGUumQL0X7OPi6kBbAj7AQNxE+Bg79gxQTXgsrBmUKYAWw7lfxYRM/gpHAgdiJsAz3422i9IgC5MgfdiJoD90BYzKyQFCN2Bg6GVcRIA1xEE3X2eJGxFeTgcHwEGmS2o604nUptY4uaMUOCckiVAz5/jGUHVv2/KjBBrD1rgg5tZ/o3O3Nlq7hayWhkotKAa8KH0SVG3JiOWJt14csq8sLMg+kejCIApP2OhFPfbNY4AxvqKS2PwJWsAAYxbbrUNe3G0LgTQWLoiPFoiPXgHdI2vzVYBcFtvzY3W8MM3Z6sATTprrgo/2SJo9PvZJwA96mqLjJMKpU1SwhckIxMAWDxskioZbooWvWQWjQB0QtXMlzzB3zToMHwcewGgm+8L3rE0nyty5Ui2APDU/0ZZzW/zLwBaM58HhR2OoQCHhO4YhwK74iIArvlhzELgJ610YGJX3Qvg5LzL5s6PBTkyE6oAGqPhHpmZYthPwL239SIAPOx+lHZo6j9zDlOsA78RlQD433AjXg+1ytcyHECpOiNudpkKFIBBd31n1X2/sg2DwUkV53hraALQC1D+2/PJ8N1R81a1pEaX46Tj/7ff+ROAngP/QNXp01Fz+bJEy2gK8vR5PF8MbF+DnwS/Aj7MSydEiuXX+NkJ/I1zFrmVPofXhh3fv5fxLIi8D7TvAAAAAElFTkSuQmCC"
          /></a>
          <a href=""
            ><img
              src="data:image/png;base64,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"
          /></a>
          <a href=""
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB8lBMVEUAAAAA//8Af/8Aqv8Av/8zmf8qqv8kkf8cqv8VqukTnOsko+wfn+8epfAcm/AYnfIXovMhpvMfn/Qeo/QdnPUbo/UZoe4gpO4enfAdoPAbnvEfofIeo/IdoPMcovMeo+8dofAeovEen/IdofIcoPIcofIbn/MboPMeovMen/MeofMdoPAcofAcn/AboPEbofEen/EdofIcovIcoPIbofIeoPIeovMdoPMdofMcovMcoPAcn/AboPEeofEdoPEdovEcoPEcofEbofIeoPIdoPIdofIdoPIcofAdoPEdofEdoPEdofEcofEcoPEcofEcn/IeoPIdoPIdofIcofIcofIdofEcoPEcofEcofEcofEdoPIdoPIcoPIcofIcofIdoPIcoPEdoPEdofEdoPEdoPIdofIcoPIdoPIdofIcoPEcofEcoPEcofEcoPEcoPIcofIdoPIdofIdofIcofIcoPEcoPEdofEdofEcoPEcoPEdoPIdofIdoPIdofIdofIcoPIcofIcoPIdoPEdofEdoPEcoPEcofEdoPIdoPIdofIcofIcoPIcofIdofEdofEcoPEcofEcoPEcoPEdoPEdoPIcoPIcofIcofIcoPIdofIdoPIdoPIdoPEcofEcofEcoPEcofEdoPEdoPEdofEdoPEdofKzG0RvAAAApXRSTlMAAQIDBAUGBwkMDQ4QERIVFhcYGRocHh8iIyUpKissMjQ6Ozw+P0BBQkNERkdISUpLT1BRUlRVVldYWVtcXV5gYWJlZmdoaW1vcHFyc3R1dnd5e31+gISFhoiKjI2OkZKXmpucnZ6gpaaoqaqrsLO0tba3ubu9vsHCw8bHyMnKy8zN0NLT1tfY2drd3t/i5Obn6Onr7O7v8PHy8/T29/j5+vv8/f5RF+LQAAACTElEQVR4Ae3B+T+TcQAH8M+zIWvuiESULCrCKqVDlA45uijJ0a071UTpoIuRkmsybcvz+T97WWbX8332PPvN6+X9xro1JOnYw0+/XN/fdFqMiEJyl5s+EzUGrMi+aYKXBeqqHAw0nI1lBY88nfBKWWyECqlVZrDpgnhLm510ZMCrhfJRiF1mGJeLy2rx30fSfRAiVpkCdyV4bfSQXDoDZaafFOgxYoO1DkA+vdokKLlCZa6GrCN3ZifTAFj434tUhDNOUdncb5KLOwCghCsmSxCmkCr+HsCybfSRb6ciRBvF3IfhFS9zlaMpDkEeUMhRhhXvGGD8nBkB+ikyshU+jQziuJGDVUMUacaqdCdDfGnNM8DLRpFL8LvKcA7btf35mwzdFDkPP7OdAp4FitQiQO48dauCT9EeoGiWehXCp4r26xXWH9QpAz67GA2nBB+zm1EYgt8Ao9AFvxOMQiX84iaom5yOAOXUbRBB7lGvZgSJ66U+8hYEi++hLjaEqZmiDhUIZ7rwlVqNGxGqbN/uvdVPZWpzCmHqqcNILMIkzlC7Sig4Tc36JCgw9FKjhSwoMg9Tm7MQSLBRi2cGiMRedDKi0QSoyGyfpbr5XKiL2d7YOU2hhZ2IKOkxhZxFiEQ6PkmhuWJEIJV/oNhYLtSlNnyjitfJUJFS2jK4RBWLTUYoKn7Z92rg8zwjGMyBSGKHk5GMHpKgIq1jjmpG6mIRgenkW5nKFu9bJGixuf75PEONdVvN0C4mr7r9yfuJmT+eGftw/62G0kysWxv+Ae4hAAX8UP/AAAAAAElFTkSuQmCC"
          /></a>
          <a href=""
            ><img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUElEQVR4nO1aS2sTURQeV7oRH/ig0Nxp5t5ppYJSrdUgdCUodiGiFQTXLgTxAYqCD8SVogguFBVFF+JKtMVS/4BVF4pufNRHRdHUJDOZ2KYptuZ6zug0j2rV4twTmvvBl4Q87v3OlzOPc+8xDA0NDQ0NDQ0NjcnDtaxZCbaoxosInmR8uVtnt6aYvSagY1rrHSbaxxjhWxzGt5fQf6/oO/Cb4jFwTBwb58C5cM5Qg5KGMS0RjdanmNgMPJoyxcWUyTtB7EN4fgMiPzsmH3BMIWkJGkDLD02+tk5fK2oG7RgDxvLXgfeZ5gwYYA8M+pI+uP9EiAVi2i2FmD5h8JBWDF0kFxwSU4w/9pht/TL4uGUtgHT6QC0yfBPE+y9CzB9nAHxwl1qcQhO6S4Ovs1dSi1LNZG10RcEAU1yiFqQ8CyDmMQPgjVfUgpSTiV4/eI+xOeBGnlyQ+gzIp01zNvz7PEYthsyEqN1iuExsoxZCR3ur4ZriAL0QIjKxH6//p8OeKNO2QaZjrfQBlxHqhpN4BbgW9kSDBw/JfC4nc+cuSLdxKXnghQzgVzADulQYEOBbvF8O7t0nnTqb3ACsHA0VxU+xAQFGnjyVmY3t1BlwHw14TmGAj3xeDt+8JdPNMSoDnsEhwPvIDAh8yA7JoTNnpVu/WKkBcAi8hQwQcWoDAoz2vZMDO3YqNIF/xELIrRQDAny91yO9tW0qMiCFl8FspRngY2RUDl+/Id2mljAzYBAzYLQiDfiJvOfJ7LHj0uENYWTAiDbA0YdAtZ8Eq/4yqG+EqvxWGB4eUBhQCcUQVMI9cBLkd1QaUEnlMLADT4JXVRhQWBBZQh10gYxfxgWRU2FPVMFLYif0omjVL4vDneAqeiE09DdIq35rzN8cZaKXWpByMv5Cb48HSJuiiVqQaiYjVnN5i0w3tShl/z4TXeN6hLzaxrkqKkNq+k1SNfXzJmqTC704IuSj37bJBZiyjZIRseuPjZLFKGqV3QQ8AofHeRisA/fT4B76tb+SxHiGPjjUwD+hJixvQddt1AqvD6P2f26VnQySDQ0z+6PRhZhe2NDsMGt1abM0X1fSCO2zrFm6/HP4TckYMGaC8WU4B86Fc4YalIaGhoaGhobGVMd3bSuUOZbqHRsAAAAASUVORK5CYII="
          /></a>
        </div>
        <small class="one">Zostel © 2022. All Rights Reserved</small>`
}
export default footer