import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

function Settings() {
  const [notifications, setNotifications] = useState(false);
  const [sync, setSync] = useState(false);
  const [voiceInput, setVoiceInput] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <span>Notifications</span>
          <Switch
            checked={notifications}
            onChange={setNotifications}
            className={`${notifications ? 'bg-primary' : 'bg-gray-400'} relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className={`${notifications ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
          </Switch>
        </li>
        <li className="flex items-center justify-between">
          <span>Sync across devices</span>
          <Switch
            checked={sync}
            onChange={setSync}
            className={`${sync ? 'bg-primary' : 'bg-gray-400'} relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className={`${sync ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
          </Switch>
        </li>
        <li className="flex items-center justify-between">
          <span>Voice input</span>
          <Switch
            checked={voiceInput}
            onChange={setVoiceInput}
            className={`${voiceInput ? 'bg-primary' : 'bg-gray-400'} relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className={`${voiceInput ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
          </Switch>
        </li>
      </ul>
    </div>
  );
}

export default Settings;