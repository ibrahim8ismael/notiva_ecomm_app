import * as React from "react";
import { AlertDialog } from "radix-ui";

const AlertDialogDemo = () => (
    <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
            <button className="inline-flex h-9 items-center justify-center rounded-lg bg-red-500 px-4 font-medium text-white transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus-visible:ring-red-400">
                Delete account
            </button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
            <AlertDialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <AlertDialog.Content className="fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-gray-200 bg-gray-100 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ">
                <AlertDialog.Title className="text-lg font-semibold text-gray-900">
                    Are you absolutely sure?
                </AlertDialog.Title>
                <AlertDialog.Description className="text-sm text-gray-600">
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                </AlertDialog.Description>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                    <AlertDialog.Cancel asChild>
                        <button className="inline-flex h-9 items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:focus-visible:ring-gray-600">
                            Cancel
                        </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button className="inline-flex h-9 items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus-visible:ring-red-400">
                            Yes, delete account
                        </button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export default AlertDialogDemo;
