import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ModuleHero from '../components/ModuleHero';
import ModuleOverview from '../components/module/ModuleOverview';
import ModuleWorkflow from '../components/module/ModuleWorkflow';
import ModuleAccess from '../components/module/ModuleAccess';
import ModuleIntegrations from '../components/module/ModuleIntegrations';
import ModuleFaq from '../components/module/ModuleFaq';
import ModuleRelated from '../components/module/ModuleRelated';
import ModuleCta from '../components/module/ModuleCta';
import { MODULES } from '../data/modules';

export default function ModulePage() {
    const { slug } = useParams();
    const m = MODULES[slug] || MODULES.procurement;

    useEffect(() => {
        document.title = `Sandwich — ${m.title}`;
        window.scrollTo(0, 0);
    }, [m.title]);

    return (
        <main>
            <ModuleHero slug={slug} module={m} />
            <ModuleOverview module={m} />
            <ModuleWorkflow module={m} />
            <ModuleAccess module={m} />
            <ModuleIntegrations module={m} />
            <ModuleFaq module={m} />
            <ModuleRelated module={m} />
            <ModuleCta module={m} />
        </main>
    );
}