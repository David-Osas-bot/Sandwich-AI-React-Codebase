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
            "Every purchase has a process. From request to approval to delivery, Sandwich keeps it visible, controlled, and accountable.",
        stats: [
            ["1", "connected workflow from request to receiving"],
            ["3", "core control points: request, purchase, receive"],
            ["360%", "visibility across spend, delivery, and supplier performance"],
        ],
        desc:
            "Procurement is where operational needs become controlled purchases. Sandwich connects purchase requests, approvals, purchase orders, deliveries, goods received, budgets, and supplier performance in one workflow—so your team can see what was requested, what was approved, what was ordered, and what actually arrived.",

        descGoodsReceived:
            "Sandwich gives your team a structured way to record the difference. Create a GRN from a purchase order, record the actual quantities received, update prices and expiry informations, and capture quality-control status before finalizing the receipt.",

        descBudgetControl:
            "Procurement decisions shouldn't happen in isolation from financial limits. \n \n Set budgets by category, monitor actual spend against them, and surface threshold alerts when spending starts to move beyond the defined limit.",

        descprocurementIntelligence:
            "Procurement data becomes more valuable when it helps you make the next decision. Sandwich gives you a broader view of procurement spend and performance—by category, by supplier, and over time.",

        descSupplierPerformance:
            "The real cost of a supplier is revealed by what happens after the order is placed. Sandwich gives your procurement team visibility into supplier performance across delivery, spend, and quality-related activity.",
        images: {
            overview: { alt: "Procurement overview dashboard" },
            workflow: { alt: "Procurement workflow" },
            purchaseOrder: { alt: "Purchase Order detail screen" },
            goodsReceived: { alt: "GRN / Goods Received screen" },
            budgetControl: { alt: "Budget vs Spend dashboard" },
            analytics: { alt: "Procurement analytics dashboard" },
            supplierPerformance: { alt: "Supplier performance dashboard" },
            experiences: { alt: "Mobile procurement + web procurement screens side by side" },
            dataFlow: { alt: "Connected procurement data flow" },
        },
        features: [
            ["check", "Purchase requests", "Turn operational needs into structured procurement requests. Teams can create, update, track, approve, or reject requests without losing the trail."],
            ["box", "Purchase orders", "Create purchase orders, submit them for approval, approve or reject them, dispatch them to suppliers, and track their progress through delivery."],
            ["truck", "Goods received & quality control", "Record what actually arrived against a purchase order. Capture quantities, prices, expiry information, and QC status, then finalize the GRN when the record is complete."],
            ["coin", "Budget control", "Set budgets by procurement category, compare actual spend against those budgets. Get alerts when thresholds are exceeded."],
            ["chart", "Supplier performance", "See supplier performance through delivery, spend, and quality-related data. Compare suppliers, identify top and bottom performers, and drill into individual supplier performance."],
        ],

        goods: [
            ["check", "Match deliveries to orders", "See the GRNs associated with each purchase order and track its delivery status."],
            ["box", "Record discrepancies", "Identify outstanding quantities instead of assuming the order arrived complete."],
            ["truck", "Quality control", "Update QC status for received items and monitor quality-control statistics."],
            ["coin", "Protect finalized records", "Once a GRN is finalized, it is locked against further edits, preserving the integrity of the receiving record."],
        ],

        suppliers: [
            ["check", "Rank performance", "Identify your top and bottom-performing suppliers."],
            ["box", "Measure delivery", "Use delivery performance and on-time rates to understand supplier reliability."],
            ["truck", "Analyze supplier spend", "See how much you're spending with individual suppliers."],
            ["coin", "Drill into performance", "Open a supplier-level view to understand its performance metrics in more detail."],
        ],

        connected: [
            ["check", "Purchasing", "Know what was requested, approved, ordered, and dispatched."],
            ["box", "Receiving", "Know what actually arrived and what remains outstanding."],
            ["truck", "Budget", "See procurement spend against defined category budgets."],
            ["coin", "Supplier performance", "Use delivery, spend, and quality data to evaluate supplier performance."],
        ],

        budget: [
            ["check", "Set category budgets", "Create and manage budgets around the categories your operation purchases from."],
            ["box", "Compare spend against budget", "See where actual procurement spend stands against the allocated budget."],
            ["truck", "Catch threshold breaches", "Get visibility when spending crosses configured budget thresholds."],
            ["coin", "Understand the bigger picture", "Set budgets by procurement category, compare actual spend against those budgets. Get alerts when thresholds are exceeded."],
            ["chart", "Supplier performance", "Use the budget summary to quickly understand procurement performance across your operation."],
        ],

        steps: [
            ["Request", "A team member raises a procurement request for the items the operation needs."],
            ["Approve", "The request moves through the appropriate approval process before purchasing goes ahead."],
            ["Purchase", "Create the purchase order, submit it for approval, and dispatch the approved order to the supplier."],
            ["Receive", "When the delivery arrives, create a goods received record against the purchase order and capture what was actually delivered."],
            ["Verify", "Record quantity, price, expiry, and quality-control information — discrepancies and outstanding quantities stay visible instead of disappearing into manual records."],
        ],

        purchase: [
            ["Approval status", "See whether a purchase order is pending approval, approved, rejected, or ready for dispatch."],
            ["Delivery progress", "Track how much of an order has been delivered and what remains outstanding."],
            ["Overdue deliveries", "Surface purchase orders with outstanding quantities that have passed their expected delivery point."],
            ["Bulk purchasing", "Create multiple purchase orders from selected products when purchasing needs to happen at scale."],
        ],

        intelligence: [
            ["Spend by category", "Understand which procurement categories account for the most spending."],
            ["Spend by supplier", "See your highest-spend suppliers and understand where your purchasing money is concentrated."],
            ["Spend trends", "Track procurement spend over time and identify changes in purchasing patterns."],
            ["Category deep dives", "Drill into individual categories when you need to understand what's driving the spend."],
            ["Delivery performance", "Monitor delivery performance trends and on-time delivery rates."],
            ["Quality performance", "Use QC statistics to understand the quality of goods being received."],
        ],
        // Five deep-dive subsections rendered between "Step by step" and
        // "One system, two experiences" — matches the PDF's dedicated
        // sections for Purchase Orders, Goods Received, Budget Control,
        // Procurement Intelligence, and Supplier Performance.
        deepDives: [
            {
                field: "purchaseOrder",
                eyebrow: "Purchase Orders",
                title: "Buy with control, not guesswork.",
                desc: "A purchase order is more than a document. It's the link between what your team requested, what was approved, what the supplier was asked to deliver, and what eventually arrived.",
                features: [
                    ["Approval status", "See whether a purchase order is pending approval, approved, rejected, or ready for dispatch."],
                    ["Delivery progress", "Track how much of an order has been delivered and what remains outstanding."],
                    ["Overdue deliveries", "Surface purchase orders with outstanding quantities that have passed their expected delivery point."],
                    ["Bulk purchasing", "Create multiple purchase orders from selected products when purchasing needs to happen at scale."],
                ],
            },
            {
                field: "goodsReceived",
                eyebrow: "Goods Received",
                title: "What you ordered isn't always what you receive.",
                desc: "Sandwich gives your team a structured way to record the difference. Create a GRN from a purchase order, record actual quantities, update prices and expiry, and capture quality-control status before finalizing the receipt.",
                features: [
                    ["Match deliveries to orders", "See the GRNs associated with each purchase order and track its delivery status."],
                    ["Record discrepancies", "Identify outstanding quantities instead of assuming the order arrived complete."],
                    ["Quality control", "Update QC status for received items and monitor quality-control statistics."],
                    ["Protect finalized records", "Once a GRN is finalized, it is locked against further edits, preserving the integrity of the receiving record."],
                ],
            },
            {
                field: "budgetControl",
                eyebrow: "Budget Control",
                title: "Know the budget before the spend becomes a problem.",
                desc: "Procurement decisions shouldn't happen in isolation from financial limits. Set budgets by category, monitor actual spend against them, and surface threshold alerts when spending starts to move beyond the defined limit.",
                features: [
                    ["Set category budgets", "Create and manage budgets around the categories your operation purchases from."],
                    ["Compare spend against budget", "See where actual procurement spend stands against the allocated budget."],
                    ["Catch threshold breaches", "Get visibility when spending crosses configured budget thresholds."],
                    ["Understand the bigger picture", "Use the budget summary to quickly understand procurement performance across your operation."],
                ],
            },
            {
                field: "analytics",
                eyebrow: "Procurement Intelligence",
                title: "See where the money is going.",
                desc: "Procurement data becomes more valuable when it helps you make the next decision. Sandwich gives you a broader view of procurement spend and performance — by category, by supplier, and over time.",
                features: [
                    ["Spend by category", "Understand which procurement categories account for the most spending."],
                    ["Spend by supplier", "See your highest-spend suppliers and understand where your purchasing money is concentrated."],
                    ["Spend trends", "Track procurement spend over time and identify changes in purchasing patterns."],
                    ["Category deep dives", "Drill into individual categories when you need to understand what's driving the spend."],
                    ["Delivery performance", "Monitor delivery performance trends and on-time delivery rates."],
                    ["Quality performance", "Use QC statistics to understand the quality of goods being received."],
                ],
            },
            {
                field: "supplierPerformance",
                eyebrow: "Supplier Performance",
                title: "Don't judge suppliers by price alone.",
                desc: "The real cost of a supplier is revealed by what happens after the order is placed. Sandwich gives your procurement team visibility into supplier performance across delivery, spend, and quality-related activity.",
                features: [
                    ["Rank performance", "Identify your top and bottom-performing suppliers."],
                    ["Measure delivery", "Use delivery performance and on-time rates to understand supplier reliability."],
                    ["Analyze supplier spend", "See how much you're spending with individual suppliers."],
                    ["Drill into performance", "Open a supplier-level view to understand its performance metrics in more detail."],
                ],
            },
        ],
        accessMobile: [
            ["Operational teams", "raise procurement requests when stock or supplies are needed"],
            ["Receiving teams", "capture goods received information when deliveries arrive"],
            ["Managers", "stay connected to purchasing activity without being tied to a desk"],
        ],
        accessWeb: [
            ["Managers", "review and act on procurement requests and purchase orders"],
            ["Finance teams", "monitor spend against budgets"],
            ["Operations leaders", "analyze delivery, spend, QC, and supplier performance"],
        ],
        faqs: [
            ["Can procurement requests be approved or rejected?", "Yes — procurement requests can be reviewed and approved or rejected by authorized managers."],
            ["Can purchase orders go through an approval process?", "Yes — purchase orders can be submitted for approval, approved, rejected, and tracked through their approval history."],
            ["Can I see which purchase orders are still awaiting approval?", "Yes — Sandwich provides a view of purchase orders currently pending approval."],
            ["What happens when a supplier delivers less than ordered?", "The purchase order's delivery status and outstanding quantities are tracked, making partial or incomplete deliveries visible."],
            ["Can I track overdue deliveries?", "Yes — Sandwich can surface purchase orders with outstanding quantities that are overdue."],
            ["Can I see what was actually received?", "Yes — goods received records link back to their purchase orders, so your team can track what was received against what was ordered."],
            ["Can I record quality-control information?", "Yes — QC status can be updated on received items, with QC statistics available for analysis."],
            ["Can procurement spend be compared against a budget?", "Yes — budgets can be created by category, with spend-versus-budget comparisons and threshold alerts."],
            ["Can I see which suppliers we're spending the most with?", "Yes — procurement analytics includes supplier-level spend analysis and top suppliers by spend."],
            ["Can I compare supplier performance?", "Yes — Sandwich provides supplier performance metrics, rankings, spend analysis, and supplier-specific performance views."],
        ],
        related: ["inventory", "suppliers", "budgets"],
    },

    inventory: {
        cat: "ops",
        icon: "box",
        title: "Inventory & Stock Control",
        tagline: "Know what you have, where you have it, and how much it really is.",
        stats: [
            ["1", "inventory system across items, packaging, and branches"],
            ["3", "levels of control: item, packaging, and branch stock"],
            ["360°", "visibility from individual stock records to organization-wide inventory"],
        ],
        desc:
            "Inventory becomes difficult to manage when the same item can exist across different branches, quantities, packaging formats, and stock records. Sandwich gives your team a structured inventory system for managing items, defining how they are packaged and measured, assigning them to the right branches, and keeping branch-level stock accurate.",

        images: {
            overview: { alt: "Inventory overview dashboard" },
            workflow: { alt: "Inventory lifecycle" },
            items: { alt: "Inventory items list/detail screen" },
            packaging: { alt: "Packaging configuration screen" },
            branchStock: { alt: "Branch stock dashboard" },
            branchAssignment: { alt: "Branch assignment interface" },
            stockControl: { alt: "Stock adjustment/detail screen" },
            intelligence: { alt: "Organization-wide inventory summary" },
            experiences: { alt: "Mobile inventory + web inventory screens side by side" },
            dataFlow: { alt: "Inventory data relationship visual" },
        },

        features: [
            ["box", "Inventory item management", "Create, update, organize, lock, and manage inventory items from one centralized system."],
            ["map", "Branch-level inventory", "Control which branches can use an inventory item and maintain separate stock records for each branch."],
            ["transfer", "Packaging & unit conversion", "Define multiple packaging configurations for an item and convert quantities between packaging formats or back to the item's base unit."],
            ["chart", "Stock control", "Manage quantities, reorder levels, cost prices, expiry information, and stock adjustments at branch level."],
            ["check", "Inventory protection", "Lock inventory items or branch stock records when changes should be restricted, and control whether negative stock is allowed."],
        ],

        steps: [
            ["Define your inventory", "Create the items your operation purchases, stores, counts, and consumes."],
            ["Set how it's packaged", "Define the different ways each item can be purchased, received, counted, or otherwise handled—and designate the appropriate default configuration for each context."],
            ["Assign it to branches", "Make inventory items available to specific branches or across the organization, with the option to exclude individual branches."],
            ["Manage branch stock", "Maintain stock records for each branch, including quantity, reorder level, cost price, expiry information, and other stock details."],
            ["Keep quantities under control", "Adjust stock when necessary, monitor negative quantities, and lock records when changes need to be restricted."],
        ],

        // Six deep-dive subsections rendered between "Step by step" and
        // "One system, two experiences" — matches the PDF's dedicated
        // sections for Inventory Items, Packaging & Units, Branch Stock,
        // Branch Assignment, Stock Control, and Inventory Intelligence.
        deepDives: [
            {
                field: "items",
                eyebrow: "Inventory Items",
                title: "One source of truth for everything you stock.",
                desc: "Create and manage your inventory catalog without losing control as your operation grows.",
                features: [
                    ["Create and manage items", "Add new inventory items and update their information as your operation changes."],
                    ["Bulk upload", "Import inventory items using Excel or CSV instead of creating every item manually."],
                    ["Control item status", "Lock inventory items when they should no longer be changed, and unlock them when updates are needed."],
                    ["See what's available where", "View branch assignments and filter inventory items based on branch visibility."],
                ],
            },
            {
                field: "packaging",
                eyebrow: "Packaging & Units",
                title: "Stop losing accuracy between cartons, packs, and individual units.",
                desc: "The same inventory item doesn't always move through your operation in the same unit. Sandwich lets you define multiple packaging configurations for an item and establish the appropriate defaults for different inventory contexts.",
                features: [
                    ["Multiple configurations", "Define more than one packaging configuration for the same inventory item."],
                    ["Context-specific defaults", "Set default packaging configurations for different contexts, including purchasing, receiving, and counting."],
                    ["Convert quantities", "Convert quantities between packaging configurations or between a packaging configuration and the item's base unit."],
                    ["Keep quantities consistent", "Use defined conversions instead of relying on manual calculations when moving between different ways of measuring the same item."],
                ],
            },
            {
                field: "branchStock",
                eyebrow: "Branch Stock",
                title: "See what's actually on hand at every branch.",
                desc: "An inventory item is only useful when you know how much of it is available where it matters. Sandwich maintains stock records at branch level, giving your team a clearer view of inventory across individual locations and the organization as a whole.",
                features: [
                    ["Branch-level quantities", "Maintain individual stock records for each branch."],
                    ["Stock adjustments", "Adjust stock quantities when inventory records need to be corrected."],
                    ["Reorder visibility", "Store reorder levels against branch stock records so teams can identify when stock needs attention."],
                    ["Cost & expiry", "Keep cost price and expiry information attached to the relevant stock record."],
                    ["Negative stock controls", "Choose whether negative stock is allowed for individual branch stock records and identify records currently below zero."],
                ],
            },
            {
                field: "branchAssignment",
                eyebrow: "Branch Assignment",
                title: "Give every branch the inventory it actually needs.",
                desc: "Not every location needs every item. Sandwich lets you control which branches an inventory item is assigned to, whether it should be available across all branches, and which locations should be excluded.",
                features: [
                    ["Assign specific branches", "Make an item available only to the locations that need it."],
                    ["Assign across the organization", "Assign an inventory item to all branches when it should be available everywhere."],
                    ["Exclude locations", "Keep an item organization-wide while excluding branches where it isn't relevant."],
                    ["See assignment status", "Review which branches currently have access to each inventory item."],
                ],
            },
            {
                field: "stockControl",
                eyebrow: "Stock Control",
                title: "Make every adjustment count.",
                desc: "Stock records change. What matters is having a controlled way to update them. Sandwich gives your team the tools to adjust branch stock while keeping important controls around what can and cannot be changed.",
                features: [
                    ["Adjust quantities", "Correct or update stock quantities at branch level when necessary."],
                    ["Lock sensitive records", "Lock branch stock records to restrict further changes."],
                    ["Control negative stock", "Allow or disallow negative quantities for individual stock records."],
                    ["Identify negative inventory", "Use the negative-stock report to quickly find records where quantities have fallen below zero."],
                ],
            },
            {
                field: "intelligence",
                eyebrow: "Inventory Intelligence",
                title: "See inventory from one branch—or the whole operation.",
                desc: "When inventory is spread across locations, managers need more than individual stock records. Sandwich provides both branch-level summaries and organization-wide inventory visibility, making it easier to understand the state of stock across the operation.",
                features: [
                    ["Branch summaries", "Get a consolidated view of inventory for an individual branch."],
                    ["Organization summary", "See inventory information across the entire organization."],
                    ["Filter by branch", "Focus on the inventory available to a specific location."],
                    ["Find exceptions", "Surface locked stock and negative-stock records that may require attention."],
                ],
            },
        ],

        accessMobile: [
            ["Branch teams", "work with inventory relevant to their location"],
            ["Stock teams", "manage or update stock information as part of daily operations"],
            ["Operational users", "work with the inventory items assigned to their branch"],
        ],
        accessWeb: [
            ["Managers", "review branch inventory and stock summaries"],
            ["Operations teams", "manage inventory items, branch assignments, and packaging configurations"],
            ["Administrators", "maintain organization-wide inventory visibility and controls"],
        ],

        connected: [
            ["box", "Items", "Define the products and materials your operation manages."],
            ["transfer", "Packaging", "Translate between the different ways an item is purchased, received, or counted."],
            ["map", "Branches", "Control where each inventory item is available."],
            ["chart", "Stock", "Track quantities and stock details at the branch level."],
            ["globe", "Organization", "Bring branch-level inventory into a broader operational view."],
        ],

        integrations: ["Paystack", "QuickBooks", "Xero"],

        faqs: [
            ["Can I assign an inventory item to specific branches?", "Yes — inventory items can be assigned to selected branches, all branches, or all branches with specific exclusions."],
            ["Can I use different packaging configurations for the same item?", "Yes — multiple packaging configurations can be created for an inventory item."],
            ["Can packaging configurations be converted?", "Yes — Sandwich can convert quantities between packaging configurations or between a packaging configuration and the item's base unit."],
            ["Can I have different default packaging configurations?", "Yes — default packaging configurations can be defined for different contexts, including purchasing, receiving, and counting."],
            ["Can I upload inventory items in bulk?", "Yes — inventory items can be bulk uploaded using Excel or CSV."],
            ["Can I manage stock separately for each branch?", "Yes — branch stock records are maintained at the branch level, allowing stock details to be managed independently across locations."],
            ["Can stock quantities be adjusted?", "Yes — branch stock quantities can be adjusted when inventory records need to be corrected or updated."],
            ["Can I set reorder levels?", "Yes — reorder-level information can be maintained on branch stock records."],
            ["Can I control negative stock?", "Yes — negative stock can be allowed or disallowed for individual branch stock records, and the system provides a report of records with negative quantities."],
            ["Can inventory records be locked?", "Yes — both inventory items and branch stock records can be locked and unlocked."],
            ["Can I see inventory across the whole organization?", "Yes — Sandwich provides an organization-wide inventory summary as well as branch-specific inventory summaries."],
        ],

        related: [ "procurement", "kitchen", "budgets"],
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
        title: "Kitchen & Central Production",
        tagline: "Turn inventory into production. Manage preparation and central kitchen operations with the stock information your teams depend on.",
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
        tagline: "Connect inventory costs with the bigger financial picture and understand how operational decisions affect your numbers.",
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