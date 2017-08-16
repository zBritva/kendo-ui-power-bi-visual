# How to make use of Kendo UI components within the PowerBI sandbox

This repo uses the trial version of Kendo UI v2017.2.621 , which may be downloaded from:

    https://www.telerik.com/download-trial-file/v2/kendo-ui .

Thanks to ignatvilesov for indicating the required snippet in:

https://github.com/whileoneloop/kendo-ui-power-bi-visual/pull/2/commits/0f6ef60c390f82cf24a3edb34c4572fd01d66d7d

This fixes the "Illegal invocation" error thrown by the Telerik component.

#### How to run:

Start a PowerBI pro free trial if not already done:

    https://app.powerbi.com/signupredirect?pbi_source=web

Install PowerBI tools from:

https://github.com/microsoft/powerbi-visuals-tools

In this repo, install npm dependencies (jquery and its types) with:

    npm install

And then run a dev instance for PowerBI to connect to and display the visual:

    pbiviz start

... Or create and upload a package manually in your Powerbi interface with:

    pbiviz package

Login to PowerBI, enable developer custom visuals, create a new report, drag on a developer/custom visual widget.  View the console output in the browser window displaying your developer visual.

#### Other resources:

    https://github.com/microsoft/powerbi-visuals-tools
    https://github.com/Microsoft/PowerBI-visuals
    https://github.com/Microsoft/PowerBI-visuals-sampleUsingExternalLibraries