// --- 1. MOCK DATA STATE (Expanded Courses) ---
const APP_STATE = {
    courses: {
        python: {
            id: 'python', name: 'Python Masterclass', color: 'var(--py-color)', icon: 'ph-file-py',
            description: 'Learn Python from scratch. Master data science, scripting, and web backends.',
            lessons: [
                {
                    id: 'py-1', title: 'Variables and Data Types', duration: '10 min',
                    content: `
                        <p>Python is dynamically typed. Think of a variable as a name attached to a particular object.</p>
                        <pre><code class="language-python"># Integer
age = 25
# String
name = "CodeCanvas"
print(f"Hello, {name}! You are {age} years old.")</code></pre>`
                },
                {
                    id: 'py-2', title: 'Control Flow (If/Else & Loops)', duration: '15 min',
                    content: `
                        <p>Control flow allows your program to make decisions and repeat tasks.</p>
                        <pre><code class="language-python">for i in range(5):
    if i % 2 == 0:
        print(f"{i} is Even")
    else:
        print(f"{i} is Odd")</code></pre>`
                },
                {
                    id: 'py-3', title: 'Functions and Scope', duration: '20 min',
                    content: `
                        <p>Functions let you encapsulate code so it can be reused.</p>
                        <pre><code class="language-python">def calculate_area(radius):
    pi = 3.14159
    return pi * (radius ** 2)

area = calculate_area(5)
print(f"Area: {area}")</code></pre>`
                },
                {
                    id: 'py-4', title: 'Lists and Dictionaries', duration: '25 min',
                    content: `
                        <p>Lists handle sequential data; Dictionaries handle key-value pairs.</p>
                        <pre><code class="language-python">user = {
    "name": "Alice",
    "skills": ["Python", "SQL"]
}
user["skills"].append("React")
print(user)</code></pre>`
                },
                {
                    id: 'py-5', title: 'Object-Oriented Python', duration: '30 min',
                    content: `
                        <p>Classes bring data and behaviors together.</p>
                        <pre><code class="language-python">class Dog:
    def __init__(self, name):
        self.name = name
    def bark(self):
        print(f"{self.name} says woof!")

my_dog = Dog("Rex")
my_dog.bark()</code></pre>`
                }
            ]
        },
        c: {
            id: 'c', name: 'C Programming', color: 'var(--c-color)', icon: 'ph-file-c',
            description: 'Dive deep into system-level programming and memory management.',
            lessons: [
                {
                    id: 'c-1', title: 'Hello World & I/O', duration: '10 min',
                    content: `<pre><code class="language-c">#include &lt;stdio.h&gt;
int main() {
    printf("Hello, World!\\n");
    return 0;
}</code></pre>`
                },
                {
                    id: 'c-2', title: 'Variables and Operators', duration: '15 min',
                    content: `<pre><code class="language-c">int a = 10, b = 3;
int sum = a + b;
int rem = a % b;</code></pre>`
                },
                {
                    id: 'c-3', title: 'Pointers Demystified', duration: '30 min',
                    content: `
                        <p>A pointer is a variable that stores the memory address of another variable.</p>
                        <pre><code class="language-c">int num = 42;
int *ptr = &num; 
printf("Value: %d via address: %p\\n", *ptr, ptr);</code></pre>`
                },
                {
                    id: 'c-4', title: 'Arrays & Memory Management', duration: '25 min',
                    content: `<pre><code class="language-c">int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;
printf("First element: %d\\n", *p);
printf("Second element: %d\\n", *(p + 1));</code></pre>`
                },
                {
                    id: 'c-5', title: 'Structs', duration: '20 min',
                    content: `<pre><code class="language-c">struct Point {
    int x;
    int y;
};
struct Point p1 = {10, 20};</code></pre>`
                }
            ]
        },
        cpp: {
            id: 'cpp', name: 'Modern C++', color: 'var(--cpp-color)', icon: 'ph-file-cpp',
            description: 'Object-oriented programming and standard template library.',
            lessons: [
                {
                    id: 'cpp-1', title: 'Namespaces & Basic Syntax', duration: '10 min',
                    content: `<pre><code class="language-cpp">#include &lt;iostream&gt;
using namespace std;
int main() {
    cout &lt;&lt; "C++ is awesome!" &lt;&lt; endl;
    return 0;
}</code></pre>`
                },
                {
                    id: 'cpp-2', title: 'Classes and Objects', duration: '20 min',
                    content: `<pre><code class="language-cpp">class Car {
public:
    string brand;
    void honk() { cout &lt;&lt; "Beep!\\n"; }
};</code></pre>`
                },
                {
                    id: 'cpp-3', title: 'Standard Template Library (STL)', duration: '25 min',
                    content: `<pre><code class="language-cpp">#include &lt;vector&gt;
#include &lt;iostream&gt;
using namespace std;
int main() {
    vector&lt;int&gt; nums = {1, 2, 3};
    nums.push_back(4);
    for(int n : nums) cout &lt;&lt; n &lt;&lt; " ";
}</code></pre>`
                },
                {
                    id: 'cpp-4', title: 'Inheritance & Polymorphism', duration: '30 min',
                    content: `<pre><code class="language-cpp">class Animal {
public:
    virtual void makeSound() { cout &lt;&lt; "Some sound\\n"; }
};
class Dog : public Animal {
public:
    void makeSound() override { cout &lt;&lt; "Woof!\\n"; }
};</code></pre>`
                }
            ]
        },
        java: {
            id: 'java', name: 'Java Development', color: 'var(--java-color)', icon: 'ph-coffee',
            description: 'Write once, run anywhere. Enterprise-grade application building.',
            lessons: [
                {
                    id: 'java-1', title: 'Java Architecture', duration: '12 min',
                    content: `<pre><code class="language-java">public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code></pre>`
                },
                {
                    id: 'java-2', title: 'Classes, Objects & Methods', duration: '20 min',
                    content: `<pre><code class="language-java">public class MathHelper {
    public static int add(int a, int b) {
        return a + b;
    }
}</code></pre>`
                },
                {
                    id: 'java-3', title: 'Exception Handling', duration: '15 min',
                    content: `<pre><code class="language-java">try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
} finally {
    System.out.println("Execution complete.");
}</code></pre>`
                },
                {
                    id: 'java-4', title: 'Collections Framework', duration: '25 min',
                    content: `<pre><code class="language-java">List&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add("Alice");
names.add("Bob");
for(String name : names) {
    System.out.println(name);
}</code></pre>`
                }
            ]
        },
        dsa: {
            id: 'dsa', name: 'Data Structures & Algorithms', color: 'var(--dsa-color)', icon: 'ph-tree-structure',
            description: 'Crack coding interviews by mastering algorithms and data structures.',
            lessons: [
                {
                    id: 'dsa-1', title: 'Big O Notation', duration: '15 min',
                    content: `<p>Big O describes the worst-case performance of an algorithm. O(1) is constant, O(N) is linear, O(N^2) is quadratic.</p>`
                },
                {
                    id: 'dsa-2', title: 'Two Sum (Arrays)', duration: '25 min',
                    content: `<p>Use a HashMap to store differences.</p><pre><code class="language-java">class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map&lt;Integer, Integer&gt; map = new HashMap&lt;&gt;();
        for (int i=0; i&lt;nums.length; i++) {
            int comp = target - nums[i];
            if (map.containsKey(comp)) return new int[]{map.get(comp), i};
            map.put(nums[i], i);
        }
        return null;
    }
}</code></pre>`
                },
                {
                    id: 'dsa-3', title: 'Reverse Linked List', duration: '30 min',
                    content: `<pre><code class="language-java">public ListNode reverseList(ListNode head) {
    ListNode prev = null, curr = head;
    while(curr != null) {
        ListNode nxt = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}</code></pre>`
                },
                {
                    id: 'dsa-4', title: 'Max Depth of Binary Tree', duration: '20 min',
                    content: `<pre><code class="language-java">public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}</code></pre>`
                }
            ]
        }
    }
};

const appDiv = document.getElementById('app');
const authModal = document.getElementById('auth-modal');

// --- 2. AUTHENTICATION LOGIC ---
function isUserLoggedIn() {
    return localStorage.getItem('cc_username') !== null;
}

function getUsername() {
    return localStorage.getItem('cc_username');
}

function loginUser(username) {
    localStorage.setItem('cc_username', username);
    toggleModal(false);
    router(); // Re-render current page
}

// Google OAuth Handler
window.handleGoogleLogin = function(response) {
    // Google returns a JWT token. We must decode the middle chunk (payload) to get the user data.
    const token = response.credential;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    
    const userObject = JSON.parse(jsonPayload);
    // userObject contains .given_name, .email, .picture, etc.
    loginUser(userObject.given_name); // Log them in using their real Google first name
};

function logoutUser() {
    localStorage.removeItem('cc_username');
    if (window.location.hash.includes('lesson')) {
        window.location.hash = ''; // Boot them from lesson page
    } else {
        router(); // Re-render current page
    }
}

// Progress Tracking
function getCompletedLessons() {
    const data = localStorage.getItem('cc_progress');
    return data ? JSON.parse(data) : [];
}

function markLessonCompleted(lessonId) {
    const completed = getCompletedLessons();
    if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem('cc_progress', JSON.stringify(completed));
    }
}

// Modal Toggle
function toggleModal(show) {
    if (show) {
        authModal.classList.add('active');
    } else {
        authModal.classList.remove('active');
    }
}

document.getElementById('close-modal').addEventListener('click', () => toggleModal(false));
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    // Accept any username to login for prototype
    loginUser(user);
});

// --- 3. RENDERING ENGINE ---
const renderNav = () => {
    const authUI = isUserLoggedIn() 
        ? `<div class="user-controls">
             <div class="user-profile"><i class="ph-bold ph-user"></i> ${getUsername()}</div>
             <button class="logout-btn" onclick="logoutUser()">Log Out</button>
           </div>`
        : `<button class="btn btn-outline" onclick="toggleModal(true)">Log In</button>`;

    return `
    <nav>
        <a href="#" class="logo">
            <i class="ph-bold ph-code"></i> CodeCanvas
        </a>
        <div class="nav-links">
            ${authUI}
        </div>
    </nav>`;
};

function renderHome() {
    const courseCards = Object.values(APP_STATE.courses).map(course => `
        <div class="course-card ${course.id}-card" onclick="window.location.hash='courses/${course.id}'">
            <div class="course-icon">
                <i class="${course.icon}"></i>
            </div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <div style="margin-top: 1rem; color: var(--text-secondary); font-size: 0.875rem;">
                <i class="ph ph-book-open"></i> ${course.lessons.length} Modules
            </div>
        </div>
    `).join('');

    appDiv.innerHTML = `
        ${renderNav()}
        <section class="hero">
            <h1>Level up your coding <span class="highlight">skills</span></h1>
            <p>Interactive, premium content to master Python, C/C++, Java, and Data Structures & Algorithms. Built for developers by developers.</p>
            ${!isUserLoggedIn() ? `<button class="btn btn-primary" onclick="toggleModal(true)">Create Free Account <i class="ph-bold ph-arrow-right"></i></button>` : `<a href="#courses/python" class="btn btn-primary">Resume Learning <i class="ph-bold ph-arrow-right"></i></a>`}
        </section>
        
        <h2 style="text-align: center; margin-bottom: 3rem;">Choose Your Path</h2>
        <div class="course-grid">
            ${courseCards}
        </div>
    `;
}

function renderCourse(courseId) {
    const course = APP_STATE.courses[courseId];
    if (!course) return;

    const loggedIn = isUserLoggedIn();
    const completed = getCompletedLessons();
    
    // Calculate Progress
    const progressPercent = Math.round((course.lessons.filter(l => completed.includes(l.id)).length / course.lessons.length) * 100);

    const lessonItems = course.lessons.map((lesson, idx) => {
        const isCompleted = completed.includes(lesson.id);
        const lockedState = !loggedIn ? 'locked-item' : '';
        const clickAction = loggedIn ? `window.location.hash='lesson/${course.id}/${lesson.id}'` : `toggleModal(true)`;
        
        return `
        <div class="lesson-item ${lockedState}" onclick="${clickAction}">
            <div style="display: flex; gap: 1rem; align-items: center;">
                <div style="background: rgba(255,255,255,0.1); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: ${course.color}">
                    ${idx + 1}
                </div>
                <h3>${lesson.title}</h3>
            </div>
            <div class="lesson-meta">
                ${isCompleted ? `<i class="ph-bold ph-check-circle"></i>` : `<span><i class="ph ph-clock"></i> ${lesson.duration}</span>`}
                ${!loggedIn ? `<i class="ph-bold ph-lock-key"></i>` : `<i class="ph-bold ph-caret-right"></i>`}
            </div>
        </div>
    `}).join('');

    const progressHeader = loggedIn ? `
        <div class="progress-stats">
            <span>Course Progress</span>
            <span>${progressPercent}%</span>
        </div>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${progressPercent}%; background: ${course.color}; box-shadow: 0 0 10px ${course.color};"></div>
        </div>
    ` : '';

    appDiv.innerHTML = `
        ${renderNav()}
        <a href="#" class="back-btn"><i class="ph-bold ph-arrow-left"></i> Back to Courses</a>
        <div class="page-header">
            <div style="display: flex; align-items: center; gap: 1.5rem;">
                <i class="${course.icon} course-icon" style="color: ${course.color}; font-size: 4rem;"></i>
                <div style="flex-grow: 1;">
                    <h1 style="margin-bottom: 0.5rem; font-size: 3rem;">${course.name}</h1>
                    <p style="margin-bottom: 0;">${course.description}</p>
                    ${progressHeader}
                </div>
            </div>
        </div>
        ${!loggedIn ? `<div style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; border-radius: 1rem; padding: 1rem; text-align: center; margin-bottom: 2rem; color: #fff;">
            <i class="ph-bold ph-lock-key"></i> You must <a href="#" onclick="toggleModal(true)" style="color: #ef4444; font-weight: bold;">Log In</a> to open course modules.
        </div>` : ''}

        <div class="lesson-list">
            ${lessonItems}
        </div>
    `;
    
    // Animate progress bar load
    if (loggedIn) {
        setTimeout(() => {
            const bar = document.querySelector('.progress-bar');
            if(bar) bar.style.width = progressPercent + '%';
        }, 100);
    }
}

function renderLesson(courseId, lessonId) {
    if (!isUserLoggedIn()) {
        window.location.hash = `courses/${courseId}`;
        toggleModal(true);
        return; 
    }

    const course = APP_STATE.courses[courseId];
    if (!course) return;

    const lessonIdx = course.lessons.findIndex(l => l.id === lessonId);
    const lesson = course.lessons[lessonIdx];
    if (!lesson) return;
    
    const nextLesson = course.lessons[lessonIdx + 1];

    appDiv.innerHTML = `
        ${renderNav()}
        <a href="#courses/${course.id}" class="back-btn"><i class="ph-bold ph-arrow-left"></i> Back to Curriculum</a>
        
        <div class="lesson-content">
            <span class="language-tag" style="color: ${course.color}; border: 1px solid ${course.color}">${course.name}</span>
            <h2>${lesson.title}</h2>
            ${lesson.content}
            
            <div style="margin-top: 4rem; display: flex; justify-content: space-between; border-top: 1px solid var(--card-border); padding-top: 2rem;">
                <button class="btn btn-outline" onclick="history.back()"><i class="ph-bold ph-caret-left"></i> Previous</button>
                <button class="btn btn-primary" onclick="completeAndContinue('${lessonId}', '${courseId}', '${nextLesson ? nextLesson.id : ''}')">
                    Complete & Continue <i class="ph-bold ph-check"></i>
                </button>
            </div>
        </div>
    `;

    setTimeout(() => {
        if (window.Prism) window.Prism.highlightAll();
        window.scrollTo(0,0);
    }, 0);
}

window.completeAndContinue = function(lessonId, courseId, nextLessonId) {
    markLessonCompleted(lessonId);
    if (nextLessonId) {
        window.location.hash = `lesson/${courseId}/${nextLessonId}`;
    } else {
        window.location.hash = `courses/${courseId}`; // End of course
    }
}

// Router
function router() {
    const hash = window.location.hash.slice(1);
    if (hash === '' || hash === '/') renderHome();
    else if (hash.startsWith('courses/')) renderCourse(hash.split('/')[1]);
    else if (hash.startsWith('lesson/')) renderLesson(hash.split('/')[1], hash.split('/')[2]);
    else renderHome();
}

window.addEventListener('hashchange', router);
window.addEventListener('hashchange', router);

window.addEventListener('DOMContentLoaded', () => {
    router();
    
    // Initialize Google SSO
    if (window.google) {
        google.accounts.id.initialize({
            // VERY IMPORTANT: Replace this ID with your real OAuth Client ID from Google Cloud Console
            client_id: "YOUR_GOOGLE_CLIENT_ID_HERE",
            callback: handleGoogleLogin,
            context: "signin",
            ux_mode: "popup"
        });
        
        // Render the Google Sign-in button inside our container
        google.accounts.id.renderButton(
            document.getElementById("google-btn-container"),
            { theme: "outline", size: "large", type: "standard", shape: "pill", width: 300 }
        );
    }
});
