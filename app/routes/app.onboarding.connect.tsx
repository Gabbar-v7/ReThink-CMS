import React, { useState } from "react";
import { CheckCircle, MessageCircle, ShoppingBag, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";

export default function OnboardingScreen() {
  const [whatsappConnected, setWhatsappConnected] = useState(false);
  const [shopifyConnected, setShopifyConnected] = useState(false);
  const [loading, setLoading] = useState({ whatsapp: false, shopify: false });

  const navigate = useNavigate();

  const handleConnect = async (service: "whatsapp" | "shopify") => {
    setLoading((prev) => ({ ...prev, [service]: true }));

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (service === "whatsapp") {
      setWhatsappConnected(true);
    } else {
      setShopifyConnected(true);
    }

    setLoading((prev) => ({ ...prev, [service]: false }));
  };

  const canContinue = whatsappConnected && shopifyConnected;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-3">
      <div className="bg-card rounded-lg border shadow-lg p-4 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Connect Your Apps
          </h1>
          <p className="text-muted-foreground">
            Link WhatsApp and Shopify to start automating your business
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {/* WhatsApp Connection */}
          <div
            className={`border rounded-lg p-4 transition-colors ${
              whatsappConnected
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    whatsappConnected ? "bg-primary" : "bg-muted"
                  }`}
                >
                  {whatsappConnected ? (
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <MessageCircle className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    Connect your WhatsApp account
                  </p>
                </div>
              </div>

              {!whatsappConnected && (
                <button
                  onClick={() => handleConnect("whatsapp")}
                  disabled={loading.whatsapp}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 flex items-center space-x-2"
                >
                  {loading.whatsapp ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <span>Connect</span>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Shopify Connection */}
          <div
            className={`border rounded-lg p-4 transition-colors ${
              shopifyConnected
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    shopifyConnected ? "bg-primary" : "bg-muted"
                  }`}
                >
                  {shopifyConnected ? (
                    <CheckCircle className="w-5 h-5 text-primary-foreground" />
                  ) : (
                    <ShoppingBag className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Shopify Store
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-1">
                    Connect your Shopify store
                  </p>
                </div>
              </div>

              {!shopifyConnected && (
                <button
                  onClick={() => handleConnect("shopify")}
                  disabled={loading.shopify}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md font-medium transition-colors disabled:opacity-50 flex items-center space-x-2"
                >
                  {loading.shopify ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <span>Connect</span>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Setup Progress</span>
            <span>
              {Number(whatsappConnected) + Number(shopifyConnected)}/2 completed
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{
                width: `${(Number(whatsappConnected) + Number(shopifyConnected)) * 50}%`,
              }}
            ></div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          disabled={!canContinue}
          className={`w-full py-3 px-4 rounded-md font-semibold transition-colors ${
            canContinue
              ? "bg-primary hover:bg-primary/90 text-primary-foreground"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
          onClick={() => navigate("/app/dashboard")}
        >
          {canContinue
            ? "Continue to Dashboard"
            : "Connect both apps to continue"}
        </button>

        {canContinue && (
          <div className="mt-4 p-3 bg-primary/5 rounded-md border border-primary/20">
            <p className="text-sm text-foreground text-center">
              Great! Your integrations are ready. You can now automate your
              WhatsApp and Shopify workflows.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
