import { useState } from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import "./FacebookPostPage.scss";

function FacebookPostPage() {
  const [posts] = useState([
    {
      id: 1,
      author: "Mark Thompson",
      avatar: "/api/placeholder/40/40",
      timeAgo: "2 hours ago",
      privacy: "Public",
      content:
        "🚨 ATTENTION FACEBOOK USERS 🚨\n\nMark Zuckerberg is giving away $5000 to everyone who shares this post! Facebook is tracking shares. You MUST share within 24 hours to qualify. This is REAL - my cousin got his payment yesterday! 💰\n\nDON'T MISS OUT! Share now and type 'DONE' in comments!",
      likes: 24,
      comments: 156,
      shares: 892,
      riskLevel: "high",
      warningTitle: "⚠️ This looks like it could be a scam. Here's why:",
      flags: [
        "Claims to be from Mark Zuckerberg - Remember, real Facebook giveaways never ask you to share posts or comment",
        "Rushing you to act within 24 hours - Just like pushy salespeople, scammers often pressure you to act quickly before you can think it through",
        "Says 'my cousin got paid' - Scammers often claim someone they know got money, but you can't verify this",
        "Promises free money for sharing - Think about it: would a billion-dollar company really give away money just for sharing a post?",
        "Uses lots of attention-grabbing emojis and CAPITAL LETTERS - This is like someone yelling to get your attention at a store",
      ],
      safetyTip:
        "Remember: If something sounds too good to be true, it probably is. Real giveaways don't require you to share posts or type 'DONE'.",
    },
    {
      id: 2,
      author: "Crypto Wealth Expert",
      avatar: "/api/placeholder/40/40",
      timeAgo: "6 hours ago",
      privacy: "Public",
      content:
        "💎 SECRET CRYPTO INVESTMENT OPPORTUNITY 💎\n\nI've developed an AI-powered trading bot that's making my clients $1000-5000 daily! Zero risk, guaranteed returns.\n\n✅ Start with just $100\n✅ Daily withdrawals\n✅ 100% success rate\n\nSpots limited! DM me 'PROFIT' to join before it's too late! 🚀💰💸",
      likes: 45,
      comments: 78,
      shares: 23,
      riskLevel: "high",
      warningTitle: "🛑 Warning Signs of an Investment Scam:",
      flags: [
        "Promises 'guaranteed' profits - Just like in Las Vegas, there's no such thing as guaranteed money in investing",
        "Claims to make thousands daily - If it were this easy to make money, everyone would be doing it",
        "Asks you to send private messages - Scammers want to get you away from public view where others might warn you",
        "Says 'limited spots available' - This is like a traveling salesman saying 'buy now or miss out!' It's pressure to make you act without thinking",
        "Claims 'zero risk' - Every real investment has some risk. Anyone saying otherwise isn't being truthful",
      ],
      safetyTip:
        "Protect yourself: Real investment opportunities don't come through Facebook posts. Talk to your bank or a licensed financial advisor about safe ways to invest your money.",
    },
    {
      id: 3,
      author: "Downtown Coffee Shop",
      avatar: "/api/placeholder/40/40",
      timeAgo: "1 hour ago",
      privacy: "Public",
      content:
        "☕ Weekend Special! ☕\n\nBuy one coffee, get one 50% off this Saturday and Sunday. Valid at our Main St. location.\n\nShow this post to claim your discount!\n\nStore hours: 7am-8pm\nPhone: (555) 123-4567\nwww.downtowncoffee.com",
      likes: 126,
      comments: 14,
      shares: 8,
      riskLevel: "low",
      warningTitle: "✅ This looks like a legitimate business post because:",
      flags: [
        "Offers a reasonable discount - 50% off is a normal sale you might see at any store",
        "Gives a real street address you can visit - You can drive by and verify it exists",
        "Lists normal business hours - Just like any regular store",
        "Provides a real phone number you can call - You can check if it's a working business",
        "Has a proper website - You can visit their webpage to learn more",
      ],
      safetyTip:
        "This is how most legitimate local businesses advertise - with clear contact information and reasonable offers.",
    },
  ]);

  const RiskBadge = ({ level, className = "" }) => {
    const badges = {
      high: {
        style: "bg-red-100 text-red-800 border-red-200",
        text: "Warning: High Risk",
      },
      medium: {
        style: "bg-yellow-100 text-yellow-800 border-yellow-200",
        text: "Caution: Medium Risk",
      },
      low: {
        style: "bg-green-100 text-green-800 border-green-200",
        text: "Safe: Low Risk",
      },
    };

    const badge = badges[level];

    return (
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${badge.style} ${className}`}
      >
        {badge.text}
      </div>
    );
  };

  return (
    <>
      <PageBanner pageTitle="Facebook Posts" />
      <div className="w-full max-w-2xl mx-auto space-y-4 p-4 bg-gray-50">
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold mb-2">Facebook Safety Helper</h2>
          <p>
            We'll help you spot posts that might be scams. Think of this like
            having a friendly neighbor who knows about online safety looking at
            posts with you.
          </p>
        </div>

        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-sm rounded-lg">
            <div className="p-4">
              {/* Post Header */}
              <div className="flex justify-between items-start">
                <div className="flex gap-2">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="font-semibold">{post.author}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span>{post.timeAgo}</span>
                      <span>·</span>
                      <span>Public</span>
                    </div>
                  </div>
                </div>
                <RiskBadge level={post.riskLevel} />
              </div>

              {/* Post Content */}
              <div className="mt-3 whitespace-pre-line">{post.content}</div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between mt-4 py-2 text-sm text-gray-500 border-b">
                <div>
                  <span>{post.likes} likes</span>
                </div>
                <div className="flex gap-3">
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-2">
                <button className="flex-1 py-2 hover:bg-gray-100 rounded-lg">
                  Like
                </button>
                <button className="flex-1 py-2 hover:bg-gray-100 rounded-lg">
                  Comment
                </button>
                <button className="flex-1 py-2 hover:bg-gray-100 rounded-lg">
                  Share
                </button>
              </div>

              {/* Risk Analysis */}
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-lg font-medium mb-3">
                  {post.warningTitle}
                </div>
                <ul className="space-y-3">
                  {post.flags.map((flag, index) => (
                    <li
                      key={index}
                      className="text-base text-gray-700 flex items-start gap-2"
                    >
                      <span className="mt-1">•</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-200 text-base text-blue-800">
                  <strong>Friendly Tip:</strong> {post.safetyTip}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FacebookPostPage;
