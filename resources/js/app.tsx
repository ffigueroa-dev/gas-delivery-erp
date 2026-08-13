import { createInertiaApp  } from '@inertiajs/react';
import type {ResolvedComponent} from '@inertiajs/react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { initializeTheme } from '@/hooks/use-appearance';

import AppLayout from '@/layouts/app-layout';
import AuthLayout from '@/layouts/auth-layout';
import SettingsLayout from '@/layouts/settings/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const pages = import.meta.glob<ResolvedComponent>([
    './pages/**/*.tsx',
    './modules/**/pages/**/*.tsx',
]);

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),

    resolve: async (name) => {
        const parts = name.split('/');

        const moduleName = parts[0];
        const pageName = parts.slice(1).join('/');

        const possiblePaths = [
            `./modules/${moduleName}/pages/${pageName}.tsx`,
            `./pages/${name}.tsx`,
        ];

        const path = possiblePaths.find(
            (possiblePath) => pages[possiblePath],
        );

        if (!path) {
            throw new Error(
                `Page not found: ${name}. Tried: ${possiblePaths.join(', ')}`,
            );
        }

        return pages[path]();
    },

    layout: (name) => {
        switch (true) {
            case name === 'welcome':
                return null;

            case name.startsWith('auth/'):
                return AuthLayout;

            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];

            default:
                return AppLayout;
        }
    },

    strictMode: true,

    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },

    progress: {
        color: '#4B5563',
    },
});

initializeTheme();
