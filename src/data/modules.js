// src/data/modules.js
//
// Single source of truth for every "module" detail page.
// Same shape as the MODULES object in module.html — this is the
// "constructor" data Segun was talking about: every module supplies
// heading, description, images/icons, features, steps, etc.
// Add a new module here and Module.jsx will render it automatically.

export const CATS = {
    ops: "Operations",
    money: "Money & Growth",
    foh: "Front of House & People",
};

export const CAT_ORDER = ["ops", "money", "foh"];

export const MODULES = {
    procurement: {
        cat: "ops",
        icon: "box",
        title: "Procurement & Purchase Orders",
        tagline:
            "Every order routes through approval and lands as a matched GRN — nothing gets bought on a hunch.",
        stats: [
            ["3", "approval stages, fully configurable"],
            ["100%", "POs auto-linked to GRNs on delivery"],
            ["0", "orders placed without a budget check"],
        ],
        desc:
            "Procurement is where discipline starts. Staff raise purchase requests against live stock levels, managers approve against budget, and every delivery is matched line-by-line before it touches the ledger.",
        features: [
            ["check", "Draft & approve POs", "Multi-stage approval routing based on branch, category, or spend threshold."],
            ["truck", "Supplier catalogs & pricing", "Standing price lists per supplier, with historical price tracking built in."],
            ["box", "GRN matching", "Goods received are matched against the PO automatically, flagging shortfalls."],
            ["chart", "AI invoice OCR", "Scans supplier invoices and pre-fills the GRN for a human to confirm."],
        ],
        ai: [
            ["AI Invoice OCR", "Auto-fills GRN fields from a photographed or emailed supplier invoice."],
            ["Price Variance Alerts", "Flags a line item priced outside its normal range before it's approved."],
        ],
        steps: [
            ["Request", "Any approved role raises a purchase request against a category or recipe."],
            ["Approve", "Routes to the right approver based on branch and spend threshold."],
            ["Send to supplier", "Approved POs go out with your standing pricing attached."],
            ["Receive & match", "GRN is checked against the PO; discrepancies are flagged, not hidden."],
        ],
        accessMobile: [
            ["Procurement staff", "raise purchase requests, scan GRNs on delivery"],
            ["Branch teams", "flag damaged or short deliveries with photo proof"],
            ["Any custom role", "request stock without needing dashboard access"],
        ],
        accessWeb: [
            ["Branch Manager", "approves requests within their threshold"],
            ["Super Admin", "sets approval rules and views spend by supplier"],
            ["Finance Officer", "reconciles POs against budget in real time"],
        ],
        integrations: ["Paystack", "QuickBooks", "Xero", "WhatsApp Business"],
        faqs: [
            ["Can I set different approval limits per branch?", "Yes — approval thresholds, routing, and required approvers are configurable per branch or department."],
            ["What happens if a delivery doesn't match the PO?", "The GRN is flagged for review instead of posting silently, so stock and cost only update once someone signs off on the discrepancy."],
        ],
        related: ["inventory", "suppliers", "budgets"],
    },

    inventory: {
        cat: "ops",
        icon: "box",
        title: "Inventory & Stock Control",
        tagline: "Real-time stock levels across every branch, with blind counts and expiry tracking that catch shrinkage early.",
        stats: [
            ["80%", "reduction in stock discrepancies within 60 days"],
            ["Live", "stock levels synced across every branch"],
            ["Auto", "reorder alerts at your set thresholds"],
        ],
        desc: "Stock control validates every delivery, tracks expiry down to the batch, and gives you blind counts so nobody can count to the number they expect.",
        features: [
            ["box", "Blind stock counts", "Staff count without seeing the expected number, protecting count accuracy."],
            ["chart", "Reorder alerts", "Automatic low-stock flags feed straight into procurement's draft POs."],
            ["truck", "Expiry & batch tracking", "FIFO suggestions and expiry alerts reduce spoilage before it happens."],
            ["chef", "Wastage logging", "One-tap waste capture with reason codes, rolled into cost reporting."],
        ],
        ai: [["Variance Detection", "Flags unusual stock movements or count discrepancies for review."]],
        steps: [
            ["Receive", "Deliveries post to stock only after GRN matching is confirmed."],
            ["Track", "Batches, expiry dates, and locations stay visible in real time."],
            ["Count", "Scheduled blind counts reconcile physical stock to system stock."],
            ["Reorder", "Low-stock items generate draft purchase requests automatically."],
        ],
        accessMobile: [
            ["Inventory staff", "perform blind counts, scan barcodes and QR labels"],
            ["Kitchen staff", "log waste and pull stock for prep"],
            ["Any custom role", "view stock relevant to their department only"],
        ],
        accessWeb: [
            ["Branch Manager", "reviews count variances and approves write-offs"],
            ["Super Admin", "benchmarks stock accuracy across branches"],
            ["Finance Officer", "values inventory for daily P&L"],
        ],
        integrations: ["Paystack", "QuickBooks", "Xero"],
        faqs: [
            ["How does blind counting work?", "Staff enter what they physically count without seeing the expected system quantity, and variances are reconciled afterward by a manager."],
            ["Does it track expiry by batch?", "Yes — each received batch carries its own expiry date, and the system surfaces FIFO pick suggestions and expiry alerts."],
        ],
        related: ["procurement", "kitchen", "transfers"],
    },

    suppliers: {
        cat: "ops",
        icon: "truck",
        title: "Supplier Management",
        tagline: "Onboard, score, and negotiate with suppliers using the same data your procurement team already sees.",
        stats: [
            ["20+", "native integrations across the platform"],
            ["Full", "price history per supplier, per item"],
            ["1", "supplier portal for POs and GRNs"],
        ],
        desc: "Every supplier gets a scorecard built from real delivery data — on-time rate, price consistency, and quality flags — so renewal conversations are backed by evidence, not memory.",
        features: [
            ["truck", "Supplier onboarding", "Structured intake for banking details, categories, and standing terms."],
            ["chart", "Performance scorecards", "On-time delivery rate, price variance, and quality flags per supplier."],
            ["coin", "Price history", "Every price change is logged against the item and the supplier."],
            ["users", "Supplier portal", "Suppliers see their own POs and GRN status without dashboard access."],
        ],
        steps: [
            ["Onboard", "Capture supplier details, categories, and payment terms."],
            ["Quote & price", "Standing prices load into procurement's catalog."],
            ["Deliver", "Performance is scored automatically against each GRN."],
            ["Review", "Scorecards inform renewal and renegotiation decisions."],
        ],
        accessMobile: [
            ["Procurement staff", "log delivery issues against a supplier in the moment"],
            ["Branch teams", "flag quality problems with photo evidence"],
        ],
        accessWeb: [
            ["Super Admin", "reviews scorecards before renewing supplier contracts"],
            ["Finance Officer", "tracks supplier spend and payment terms"],
        ],
        integrations: ["Paystack", "WhatsApp Business", "QuickBooks"],
        faqs: [
            ["Can suppliers see their own orders?", "Yes, through a limited supplier portal view scoped to their own POs and GRN status."],
            ["How is a supplier's score calculated?", "From on-time delivery rate, price consistency against agreed terms, and quality flags raised at receiving."],
        ],
        related: ["procurement", "inventory", "payments"],
    },

    recipes: {
        cat: "ops",
        icon: "chef",
        title: "Recipe Management & AI Yield Calc",
        tagline: "Every dish becomes a costed recipe, with AI yield calculation turning raw stock into accurate plate cost.",
        stats: [
            ["95%+", "accuracy on daily automated cost data"],
            ["Auto", "yield loss factored into every recipe cost"],
            ["Live", "recipe cost updates as ingredient prices move"],
        ],
        desc: "Recipes aren't just instructions here — they're the bridge between your stock ledger and your menu pricing, with AI-estimated yield loss so plate cost reflects reality, not the raw invoice price.",
        features: [
            ["chef", "Recipe cards", "Structured ingredients, method, and sub-recipes for prepped components."],
            ["chart", "AI yield calculation", "Estimates trim, cook, and shrinkage loss per ingredient automatically."],
            ["coin", "Cost per dish", "Real-time plate cost as ingredient prices and yields change."],
            ["box", "Sub-recipe nesting", "Build prepped bases once and reuse them across the menu."],
        ],
        ai: [["AI Yield Calc", "Learns shrinkage and trim loss per ingredient from your own kitchen's data over time."]],
        steps: [
            ["Build", "Create the recipe with ingredients, quantities, and method."],
            ["Calculate", "AI yield calc factors in loss to produce true cost per portion."],
            ["Prep", "Kitchen staff follow the recipe card during production."],
            ["Review", "Cost per dish feeds directly into menu profitability reporting."],
        ],
        accessMobile: [
            ["Kitchen staff", "follow recipe cards and log actual yield during prep"],
            ["Processing staff", "build sub-recipes for batch production"],
        ],
        accessWeb: [
            ["Finance Officer", "reviews cost per dish against menu price"],
            ["Branch Manager", "standardizes recipes across the kitchen team"],
        ],
        integrations: ["QuickBooks", "Xero"],
        faqs: [
            ["How accurate is the AI yield estimate?", "It starts from category-level benchmarks and refines toward your own kitchen's logged actuals the more the recipe is prepared."],
            ["Can one recipe feed into another?", "Yes — sub-recipes for prepped bases (sauces, doughs, marinades) can be nested inside finished dish recipes."],
        ],
        related: ["kitchen", "budgets", "forecasting"],
    },

    kitchen: {
        cat: "ops",
        icon: "chef",
        title: "Kitchen, Central Production & KDS",
        tagline: "Orders route straight to the right station, with a live 3D view of what's cooking across the floor.",
        stats: [
            ["30%", "faster order-to-service time"],
            ["Live", "kitchen display routing by station"],
            ["1", "central production view across branches"],
        ],
        desc: "The Kitchen Display System routes tickets to the right station the moment an order fires, while the 3D kitchen view gives a manager a glance at what's backed up before it becomes a problem.",
        features: [
            ["chef", "Kitchen Display System", "Digital tickets replace paper, routed automatically by station."],
            ["box", "3D kitchen activity view", "A live spatial view of order status across every station."],
            ["truck", "Central production", "Batch-produce shared components for multiple branches from one kitchen."],
            ["check", "Formal validation", "Prepped output is confirmed before it posts back to stock."],
        ],
        steps: [
            ["Fire", "Orders from POS or online channels hit the KDS instantly."],
            ["Route", "Tickets are routed to the correct station automatically."],
            ["Prep", "Staff work the recipe card and mark items ready."],
            ["Validate", "Completed prep is confirmed, updating stock and cost."],
        ],
        accessMobile: [
            ["Kitchen staff", "view and clear KDS tickets by station"],
            ["Processing staff", "log batch production against central recipes"],
        ],
        accessWeb: [
            ["Branch Manager", "monitors kitchen throughput via the 3D view"],
            ["Super Admin", "compares kitchen speed across branches"],
        ],
        integrations: ["Glovo", "Chowdeck", "Uber Eats", "Bolt Food"],
        faqs: [
            ["Does the KDS replace paper tickets entirely?", "Most kitchens move fully digital, though tickets can still be printed as a backup during setup."],
            ["Can one kitchen produce for multiple branches?", "Yes — central production lets one kitchen batch-prep shared items and transfer them to satellite branches."],
        ],
        related: ["recipes", "transfers", "pos"],
    },

    transfers: {
        cat: "ops",
        icon: "transfer",
        title: "Inter-Branch Transfers & Logistics",
        tagline: "Move stock between branches with the same formal acceptance step as any external delivery.",
        stats: [
            ["100%", "transfers matched on arrival before stock updates"],
            ["Live", "in-transit visibility across branches"],
            ["0", "stock moved without a receiving confirmation"],
        ],
        desc: "A transfer out of one branch isn't stock received at another until someone confirms it landed — so shrinkage between locations shows up immediately instead of vanishing into a rounding error.",
        features: [
            ["transfer", "Transfer requests", "Branches request stock from each other or from central production."],
            ["truck", "In-transit tracking", "Visibility into what's moving, from where, and expected arrival."],
            ["check", "Receiving confirmation", "Stock only updates at the destination once it's formally accepted."],
            ["chart", "Reconciliation reporting", "Variances between sent and received are visible immediately."],
        ],
        steps: [
            ["Request", "A branch requests stock from another branch or central kitchen."],
            ["Dispatch", "The sending branch logs what's going out and how."],
            ["Transit", "Status is visible to both branches until it arrives."],
            ["Receive", "The destination confirms quantity before stock posts."],
        ],
        accessMobile: [
            ["Branch teams", "request and dispatch transfers on the floor"],
            ["Logistics staff", "update in-transit status from the road"],
        ],
        accessWeb: [
            ["Branch Manager", "tracks incoming and outgoing transfers"],
            ["Super Admin", "reviews cross-branch shrinkage patterns"],
        ],
        integrations: ["WhatsApp Business"],
        faqs: [
            ["What happens if the received quantity doesn't match?", "The variance is flagged for both branches to resolve rather than silently adjusting either ledger."],
            ["Can transfers come from central production instead of another branch?", "Yes — central production output can be transferred to any branch the same way stock moves between branches."],
        ],
        related: ["inventory", "kitchen", "branches"],
    },

    accounting: {
        cat: "money",
        icon: "coin",
        title: "Accounting & Finance",
        tagline: "A daily P&L in your inbox by morning, synced to the accounting software you already use.",
        stats: [
            ["95%+", "accuracy on daily automated P&L"],
            ["18", "built-in accounting capabilities"],
            ["Auto", "sync to QuickBooks or Xero"],
        ],
        desc: "Every sale, purchase, and payroll entry across the platform posts to one ledger, so the daily P&L is assembled automatically instead of rebuilt by hand from five different sources.",
        features: [
            ["coin", "Automated daily P&L", "Revenue, cost, and margin assembled from live operational data."],
            ["check", "Journal entries", "Every stock movement and payment posts as a proper journal entry."],
            ["chart", "Cash flow tracking", "See cash position across branches without waiting on month-end."],
            ["box", "QuickBooks / Xero sync", "Journal entries, invoices, and tax rates sync automatically."],
        ],
        steps: [
            ["Capture", "Sales, purchases, and payroll post to the ledger as they happen."],
            ["Classify", "Entries are categorized against your chart of accounts."],
            ["Reconcile", "Bank and wallet balances are matched against the ledger."],
            ["Report", "Daily P&L and cash flow are ready each morning."],
        ],
        accessMobile: [["Branch teams", "see daily sales and cost summaries for their branch"]],
        accessWeb: [
            ["Finance Officer", "closes the books daily and manages the chart of accounts"],
            ["Super Admin", "reviews consolidated financials across branches"],
        ],
        integrations: ["QuickBooks", "Xero", "Paystack"],
        faqs: [
            ["Do I need to double-enter anything in QuickBooks or Xero?", "No — the accounting module syncs journal entries, invoices, suppliers, and tax rates automatically."],
            ["How current is the daily P&L?", "It's assembled from the same real-time ledger every other module posts to, so it reflects the previous full day of operations each morning."],
        ],
        related: ["budgets", "reports", "payments"],
    },

    budgets: {
        cat: "money",
        icon: "chart",
        title: "Budgets & Cost Analytics",
        tagline: "Set a budget per branch, per category, and see the variance the moment it starts to drift.",
        stats: [
            ["Live", "budget vs actual by branch and category"],
            ["Auto", "food cost ratio tracked against target"],
            ["Early", "variance alerts before month-end"],
        ],
        desc: "Cost analytics ties every purchase and recipe back to a budget line, so a category running hot shows up as a variance this week — not as a surprise on the monthly statement.",
        features: [
            ["chart", "Budget vs actual", "Track spend against budget by branch, category, or supplier."],
            ["coin", "Food cost ratio", "Automatic tracking of cost-of-goods against sales, by branch."],
            ["check", "Target variance alerts", "Flags categories drifting away from their target range."],
            ["box", "Cost per dish rollups", "Recipe-level cost feeds directly into category budgets."],
        ],
        steps: [
            ["Set", "Define budgets by branch, category, or supplier."],
            ["Track", "Actual spend posts against budget automatically."],
            ["Flag", "Variances outside target range are surfaced early."],
            ["Adjust", "Reforecast or renegotiate before it compounds."],
        ],
        accessMobile: [["Branch teams", "see their own category spend against target"]],
        accessWeb: [
            ["Finance Officer", "builds and adjusts budgets across categories"],
            ["Super Admin", "benchmarks cost ratios across branches"],
        ],
        integrations: ["QuickBooks", "Xero"],
        faqs: [
            ["Can budgets be set per branch instead of company-wide?", "Yes — budgets can be defined at the branch, category, or supplier level independently."],
            ["Does this connect to recipe costing?", "Yes — recipe-level cost from the Recipe Management module rolls up directly into category budgets."],
        ],
        related: ["accounting", "forecasting", "reports"],
    },

    forecasting: {
        cat: "money",
        icon: "forecast",
        title: "AI Forecasting & Predictive Ordering",
        tagline: "A 14-day sales forecast that explodes into a supplier-ready draft purchase order.",
        stats: [
            ["14-day", "self-improving demand forecast"],
            ["Auto", "recipe explosion into ingredient needs"],
            ["Draft", "supplier-ready PO generated for review"],
        ],
        desc: "Forecasting turns your sales history into a per-item demand curve, explodes that through your recipes into raw ingredient needs, and drafts the purchase order for a human to approve — never to auto-send.",
        features: [
            ["forecast", "14-day sales forecasting", "Self-improving demand prediction by branch and menu item."],
            ["chef", "Recipe explosion", "Forecasted dish demand converts into raw ingredient quantities."],
            ["box", "Predictive draft POs", "A draft purchase order is generated from the forecasted need."],
            ["chart", "Variance detection", "Flags demand or price patterns that break from the forecast."],
        ],
        steps: [
            ["Forecast", "Predict demand per item, per branch, for the next 14 days."],
            ["Explode", "Convert dish-level demand into ingredient-level need via recipes."],
            ["Draft", "Generate a draft PO sized to forecasted demand."],
            ["Review", "A human approves, edits, or rejects before it sends."],
        ],
        accessMobile: [["Branch teams", "review and confirm draft POs generated for their branch"]],
        accessWeb: [
            ["Super Admin", "monitors forecast accuracy across the network"],
            ["Finance Officer", "reviews forecast-driven spend before approval"],
        ],
        integrations: ["QuickBooks", "Xero"],
        faqs: [
            ["Does the AI ever place orders automatically?", "No — every AI-generated draft PO is reviewable and overridable by your team before anything is sent to a supplier."],
            ["How does the forecast improve over time?", "It's self-improving: as actual sales come in, the model adjusts its per-item, per-branch predictions for the following weeks."],
        ],
        related: ["procurement", "recipes", "budgets"],
    },

    payments: {
        cat: "money",
        icon: "wallet",
        title: "Payments & Wallets",
        tagline: "Every payment processed, reconciled, and receipted — with refunds routed through approval.",
        stats: [
            ["Reconciled", "wallets across every branch"],
            ["Auto", "receipts on every transaction"],
            ["Logged", "refund approvals with full audit trail"],
        ],
        desc: "Payments processed through Paystack post straight into reconciled branch wallets, so cash position is always current and refunds go through the same approval discipline as any other financial action.",
        features: [
            ["wallet", "Reconciled wallets", "Branch wallets stay matched to processed payments automatically."],
            ["check", "Refund approvals", "Refunds route through approval before funds move."],
            ["box", "Receipting", "Every transaction generates a receipt automatically."],
            ["coin", "Split payments", "Multiple payment methods on a single order, reconciled together."],
        ],
        steps: [
            ["Charge", "A payment is taken via Paystack at POS or online."],
            ["Reconcile", "The transaction matches against the branch wallet."],
            ["Receipt", "A receipt generates and can be sent to the customer."],
            ["Refund", "Refund requests route through approval before reversing."],
        ],
        accessMobile: [["Cashiers", "take payments and issue receipts at the point of sale"]],
        accessWeb: [
            ["Finance Officer", "reconciles wallets and approves refunds"],
            ["Super Admin", "monitors payment volume across branches"],
        ],
        integrations: ["Paystack"],
        faqs: [
            ["Which payment processor is this built on?", "Payments are processed through Paystack, with wallets, receipts, and refund logs reconciled inside Sandwich."],
            ["Can a customer pay with more than one method?", "Yes — split payments across multiple methods are supported and reconciled as a single transaction."],
        ],
        related: ["pos", "accounting", "suppliers"],
    },

    reports: {
        cat: "money",
        icon: "reports",
        title: "Reports & Business Intelligence",
        tagline: "A BCG-style menu matrix and cross-branch benchmarking, without exporting a single spreadsheet.",
        stats: [
            ["1", "view for cross-branch benchmarking"],
            ["Auto", "BCG menu profitability matrix"],
            ["Export", "dashboards ready to share"],
        ],
        desc: "Reporting pulls from the same ledger every other module writes to, so the menu profitability matrix and cross-branch benchmarks reflect this morning's numbers, not last month's export.",
        features: [
            ["reports", "BCG menu matrix", "Classifies menu items by margin and popularity automatically."],
            ["chart", "Cross-branch benchmarking", "Compare cost ratios, speed, and margin across locations."],
            ["box", "Exportable dashboards", "Share a live view or export a snapshot for a meeting."],
            ["check", "Custom report builder", "Build views specific to a role or a recurring question."],
        ],
        steps: [
            ["Collect", "Every module writes its activity to the shared ledger."],
            ["Classify", "Menu items and branches are scored against your goals."],
            ["Compare", "Benchmark performance across branches side by side."],
            ["Share", "Export or share a live dashboard with stakeholders."],
        ],
        accessMobile: [["Branch Manager", "views their own branch's daily performance summary"]],
        accessWeb: [
            ["Super Admin", "benchmarks all branches from one console"],
            ["Finance Officer", "builds custom views for recurring reviews"],
        ],
        integrations: ["QuickBooks", "Xero"],
        faqs: [
            ["What is the BCG menu matrix?", "It classifies each menu item by margin and sales volume, similar to the BCG growth-share matrix, to surface which dishes to promote, fix, or retire."],
            ["Can I export a report to share outside the platform?", "Yes — dashboards can be exported as a snapshot or shared as a live link depending on the recipient's access."],
        ],
        related: ["accounting", "budgets", "branches"],
    },

    pos: {
        cat: "foh",
        icon: "pos",
        title: "POS & Table Management",
        tagline: "Full-screen table service with split bills, and every sale depleting stock the instant it's rung in.",
        stats: [
            ["Live", "stock depletion on every sale"],
            ["Split", "bills across multiple payment methods"],
            ["1", "screen for aggregator orders"],
        ],
        desc: "POS isn't a separate system bolted onto the ledger — every sale posts to stock and finance in real time, and orders from delivery aggregators land in the same queue as a table order.",
        features: [
            ["pos", "Table & floor plan", "Visual floor management with live table status."],
            ["wallet", "Split bills", "Multiple payment methods on one bill, reconciled together."],
            ["chef", "KDS routing", "Orders fire straight to the kitchen display on submission."],
            ["globe", "Aggregator orders", "Glovo, Chowdeck, Uber Eats, and Bolt Food orders in one queue."],
        ],
        steps: [
            ["Order", "Waitstaff or a cashier takes the order at the table or counter."],
            ["Fire", "The ticket routes to the KDS automatically."],
            ["Serve", "Kitchen marks items ready; service completes the order."],
            ["Settle", "Payment is taken, split if needed, and stock depletes instantly."],
        ],
        accessMobile: [["Cashiers & waitstaff", "take orders, split bills, manage tables"]],
        accessWeb: [
            ["Branch Manager", "monitors table turnover and daily sales"],
            ["Super Admin", "compares POS performance across branches"],
        ],
        integrations: ["Paystack", "Glovo", "Chowdeck", "Uber Eats", "Bolt Food"],
        faqs: [
            ["Do you have your own delivery riders?", "No — Sandwich integrates directly with the rider and aggregator systems you already use, so dispatch and order status flow into your ledger."],
            ["Does a sale update stock immediately?", "Yes — a completed sale depletes stock and posts to the ledger the moment it settles."],
        ],
        related: ["online-ordering", "payments", "kitchen"],
    },

    "online-ordering": {
        cat: "foh",
        icon: "globe",
        title: "Online Ordering & Aggregators",
        tagline: "Glovo, Chowdeck, Uber Eats, and Bolt Food orders land in one queue — no juggling four tablets.",
        stats: [
            ["4", "aggregators integrated out of the box"],
            ["1", "unified order queue"],
            ["Live", "stock and sales sync per channel"],
        ],
        desc: "Aggregator orders arrive in the same queue as your dine-in tickets, post to stock the same way, and roll into the same reporting — so channel performance is comparable, not siloed.",
        features: [
            ["globe", "Unified order queue", "All channels land in one queue instead of separate tablets."],
            ["chef", "KDS integration", "Aggregator orders route to the kitchen display like any other."],
            ["chart", "Channel reporting", "Compare sales, cost, and speed by ordering channel."],
            ["check", "Menu sync", "Push menu and price changes to every channel at once."],
        ],
        steps: [
            ["Receive", "An order arrives from any connected aggregator."],
            ["Route", "It lands in the same queue and fires to the KDS."],
            ["Fulfil", "Kitchen preps it like any other order."],
            ["Reconcile", "Sales and commissions post to the ledger by channel."],
        ],
        accessMobile: [["Kitchen & FOH staff", "see aggregator orders alongside dine-in tickets"]],
        accessWeb: [
            ["Branch Manager", "compares channel performance and commission cost"],
            ["Super Admin", "manages which aggregators are active per branch"],
        ],
        integrations: ["Glovo", "Chowdeck", "Uber Eats", "Bolt Food"],
        faqs: [
            ["Does this replace the aggregator's own rider app?", "No — Sandwich doesn't operate riders. It integrates with each aggregator's existing dispatch so orders and status sync into your ledger."],
            ["Can I push a price change to all channels at once?", "Yes — menu and price updates sync to every connected channel from a single edit."],
        ],
        related: ["pos", "crm", "reports"],
    },

    crm: {
        cat: "foh",
        icon: "gift",
        title: "CRM, Loyalty & Gift Cards",
        tagline: "Customer profiles, loyalty points, and gift cards that work the same across every branch.",
        stats: [
            ["1", "customer profile across all branches"],
            ["Auto", "loyalty points on qualifying sales"],
            ["Live", "gift card balance at any location"],
        ],
        desc: "A customer's loyalty balance and gift card credit follow them between branches, because it's the same ledger — not a per-branch spreadsheet someone forgot to update.",
        features: [
            ["users", "Customer profiles", "Purchase history and preferences visible at any branch."],
            ["gift", "Loyalty points", "Points accrue and redeem automatically at checkout."],
            ["wallet", "Gift cards", "Issue and redeem gift cards with a live, shared balance."],
            ["chart", "Campaign tracking", "See which promotions actually drove repeat visits."],
        ],
        steps: [
            ["Capture", "A customer profile is created or matched at checkout."],
            ["Accrue", "Loyalty points post automatically on qualifying sales."],
            ["Redeem", "Points or gift card balance apply at any branch."],
            ["Analyze", "Campaign and retention data roll into reporting."],
        ],
        accessMobile: [["Cashiers", "look up loyalty balance and redeem gift cards at POS"]],
        accessWeb: [
            ["Branch Manager", "runs local promotions and reviews redemption"],
            ["Super Admin", "tracks loyalty program performance company-wide"],
        ],
        integrations: ["WhatsApp Business", "Paystack"],
        faqs: [
            ["Does a gift card work across all my branches?", "Yes — gift card and loyalty balances are shared across every branch on the same account."],
            ["Can I run a branch-specific promotion?", "Yes — campaigns can be scoped to a single branch or run company-wide."],
        ],
        related: ["online-ordering", "team-chat", "reports"],
    },

    "team-chat": {
        cat: "foh",
        icon: "chat",
        title: "Team Chat, RBAC & Custom Roles",
        tagline: "Branch and department channels, with permissions down to the feature level.",
        stats: [
            ["Granular", "RBAC down to the feature level"],
            ["Custom", "roles for any department you define"],
            ["Branch", "department, and role-based channels"],
        ],
        desc: "Team chat keeps every shift in sync without leaving the platform, while role-based access control makes sure a cashier never sees payroll and a supplier never sees your P&L.",
        features: [
            ["chat", "Branch & department channels", "Conversations scoped to the people who need them."],
            ["users", "Granular RBAC", "Permissions set down to the individual feature."],
            ["check", "Custom roles", "Define departments and access unique to your operation."],
            ["box", "Audit trail", "Every permission change is timestamped and traceable."],
        ],
        steps: [
            ["Define", "Create a custom role or use a built-in one."],
            ["Assign", "Grant feature-level permissions to that role."],
            ["Communicate", "Staff join the channels relevant to their branch and role."],
            ["Audit", "Permission and message history stay fully traceable."],
        ],
        accessMobile: [["Any staff role", "joins branch and department channels on shift"]],
        accessWeb: [
            ["Super Admin", "defines roles and permissions company-wide"],
            ["HR & Team Leads", "manage onboarding into the right channels and roles"],
        ],
        integrations: ["WhatsApp Business"],
        faqs: [
            ["Can I create a role that doesn't fit the defaults?", "Yes — custom roles can be defined with permissions scoped to exactly the features that role needs."],
            ["Are permission changes logged?", "Yes — every permission and role change is timestamped and part of the full audit trail."],
        ],
        related: ["branches", "crm", "procurement"],
    },

    branches: {
        cat: "foh",
        icon: "map",
        title: "Branches & Multi-Location",
        tagline: "A Super Admin console over every branch, with new-site onboarding down to a day.",
        stats: [
            ["Unlimited", "branches on the Enterprise plan"],
            ["1", "day to onboard a new branch"],
            ["99.9%", "platform uptime during operating hours"],
        ],
        desc: "Every branch runs on the same ledger and the same modules, so a Super Admin can compare two locations honestly — and a new site can go live in a day using the same setup guides as the first.",
        features: [
            ["map", "Cross-branch console", "One view over every branch's operations and financials."],
            ["chart", "Benchmarking", "Compare cost ratios, speed, and margin between branches."],
            ["check", "One-day onboarding", "New branches follow the same guided setup as any other."],
            ["users", "Per-branch permissions", "Staff and managers scoped to the branches they run."],
        ],
        steps: [
            ["Set up", "Configure the new branch using the standard setup guide."],
            ["Assign", "Add staff and managers scoped to that branch."],
            ["Launch", "The branch goes live on the same ledger as the rest."],
            ["Compare", "Performance rolls into cross-branch benchmarking immediately."],
        ],
        accessMobile: [["Branch staff", "work entirely within their assigned branch"]],
        accessWeb: [
            ["Super Admin", "oversees and benchmarks every branch from one console"],
            ["Branch Manager", "runs daily operations for their own location"],
        ],
        integrations: ["QuickBooks", "Xero", "Paystack"],
        faqs: [
            ["How long does a new branch take to onboard?", "Most single-branch operators are fully live within a day using the built-in setup guides."],
            ["Is there a limit to how many branches I can run?", "Starter and Growth plans cap branch count; Enterprise supports unlimited branches with a dedicated onboarding team."],
        ],
        related: ["reports", "team-chat", "transfers"],
    },
};