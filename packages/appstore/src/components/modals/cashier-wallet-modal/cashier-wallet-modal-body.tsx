import React from 'react';
import classNames from 'classnames';
import { Tabs, ThemedScrollbars } from '@deriv/components';
import { isDesktop } from '@deriv/shared';
import { getCashierOptions, TWalletType } from './provider';

type TCashierWalletModalBodyProps = {
    active_tab_index: number;
    is_dark: boolean;
    is_demo: boolean;
    setActiveTabIndex: (index: number) => void;
    is_wallet_name_visible: boolean;
    wallet_type: TWalletType;
};

const CashierWalletModalBody = React.forwardRef<HTMLDivElement, TCashierWalletModalBodyProps>(
    ({ active_tab_index, is_dark, is_demo, setActiveTabIndex, is_wallet_name_visible, wallet_type = 'p2p' }, ref) => {
        return (
            <Tabs
                active_icon_color={is_dark ? 'var(--badge-white)' : ''}
                active_index={active_tab_index}
                className={classNames('cashier-wallet-modal__tabs', {
                    'content-scrolled': !is_wallet_name_visible,
                })}
                has_active_line={false}
                has_bottom_line={false}
                header_fit_content
                icon_size={16}
                icon_color={is_demo ? 'var(--demo-text-color-1)' : ''}
                onTabItemClick={(index: number) => {
                    setActiveTabIndex(index);
                }}
            >
                {getCashierOptions(wallet_type).map(option => {
                    return (
                        <div key={option.label} icon={option.icon} label={option.label}>
                            <ThemedScrollbars refSetter={ref} is_bypassed={isDesktop()} is_scrollbar_hidden>
                                {option.content}
                            </ThemedScrollbars>
                        </div>
                    );
                })}
            </Tabs>
        );
    }
);

CashierWalletModalBody.displayName = 'CashierWalletModalBody';

export default CashierWalletModalBody;
