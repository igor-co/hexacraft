import { userHttpServiceInstance } from '@hexacraft/domain';
import { useUserFormViewModel } from './user-form.view-model';

export const UserForm = () => {
  const {
    formErrors,
    handleCreateNewUser,
    onEmailChange,
    onUserFormDataChange,
    userFormData,
  } = useUserFormViewModel(userHttpServiceInstance);

  return (
    <form onSubmit={handleCreateNewUser}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem',
          width: '300px',
          gap: '1rem',
        }}
      >
        <label id="name-label" htmlFor="name-input">
          Name
        </label>
        <input
          aria-labelledby="name-label"
          id="name-input"
          onChange={(e) =>
            onUserFormDataChange({ field: 'name', value: e.target.value })
          }
          placeholder="Enter the Name"
          style={formErrors['name'].length ? { borderColor: 'red' } : undefined}
          type="text"
          value={userFormData.name}
        />
        {formErrors['name'] && (
          <div
            id="name-description"
            role="alert"
            aria-live="assertive"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {formErrors.name.map((error) => (
              <span key={error} style={{ color: 'red', fontSize: '0.8rem' }}>
                {error}
              </span>
            ))}
          </div>
        )}

        <label id="email-label" htmlFor="email-input">
          Email
        </label>
        <input
          aria-labelledby="email-label"
          id="email-input"
          onChange={(e) => {
            onEmailChange(e.target.value);
            onUserFormDataChange({ field: 'email', value: e.target.value });
          }}
          placeholder="Enter the Email"
          style={
            formErrors['email'].length ? { borderColor: 'red' } : undefined
          }
          type="email"
          value={userFormData.email}
        />
        {formErrors['email'] && (
          <div
            id="email-description"
            role="alert"
            aria-live="assertive"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {formErrors.email.map((error) => (
              <span key={error} style={{ color: 'red', fontSize: '0.8rem' }}>
                {error}
              </span>
            ))}
          </div>
        )}

        <label id="password-label" htmlFor="password-input">
          Password
        </label>
        <input
          aria-labelledby="password-label"
          id="password-input"
          onChange={(e) =>
            onUserFormDataChange({ field: 'password', value: e.target.value })
          }
          placeholder="Enter the Password"
          aria-errormessage=""
          style={
            formErrors['password'].length ? { borderColor: 'red' } : undefined
          }
          type="password"
          value={userFormData.password}
        />
        {formErrors['password'] && (
          <div
            id="password-description"
            role="alert"
            aria-live="assertive"
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {formErrors.password.map((error) => (
              <span key={error} style={{ color: 'red', fontSize: '0.8rem' }}>
                {error}
              </span>
            ))}
          </div>
        )}

        <button type="submit">Register User</button>
      </div>
    </form>
  );
};
